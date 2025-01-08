import { Order } from "./types";

type Listener<EventType> = (ev: EventType) => void;

// Observer
function createObserver<EventType>(): {
  subscribe: (listener: Listener<EventType>) => () => void;
  publish: (event: EventType) => void;
} {
  // Clousure
  let listeners: Listener<EventType>[] = [];

  return {
    subscribe: (listener: Listener<EventType>): (() => void) => {
      listeners.push(listener);
      return () => {
        return (listeners = listeners.filter((l) => l !== listener));
      };
    },
    publish: (event: EventType) => {
      listeners.forEach((l) => l(event));
    },
  };
}

interface BeforeSetEvent<T> {
  value: T;
  newValue: T;
}

interface AfterSetEvent<T> {
  value: T;
}

interface BaseRecord {
  id: string;
}

interface Database<T extends BaseRecord> {
  set(data: T): void;
  get(id: string): T;

  onBeforeAdd(listener: Listener<BeforeSetEvent<T>>): () => void;
  onAfterAdd(listener: Listener<AfterSetEvent<T>>): () => void;
}

function createDatabase<T extends BaseRecord>() {
  class InMemoryDatabase implements Database<T> {
    private db: Record<string, T> = {};
    static instance: InMemoryDatabase = new InMemoryDatabase();
    private beforeAddListeners = createObserver<BeforeSetEvent<T>>();
    private afterAddListeners = createObserver<AfterSetEvent<T>>();
    private constructor() {}

    onBeforeAdd(listener: Listener<BeforeSetEvent<T>>): () => void {
      return this.beforeAddListeners.subscribe(listener);
    }
    onAfterAdd(listener: Listener<AfterSetEvent<T>>): () => void {
      return this.afterAddListeners.subscribe(listener);
    }

    public set(data: T): void {
      this.beforeAddListeners.publish({
        newValue: data,
        value: this.db[data.id],
      });
      this.db[data.id] = data;

      this.afterAddListeners.publish({
        value: data,
      });
    }

    public get(id: string): T {
      return this.db[id];
    }
  }
  return InMemoryDatabase;
}

const orderDB = createDatabase<Order>();

const unsubcriber = orderDB.instance.onAfterAdd(({ value }) => {
  console.log(value);
});

orderDB.instance.set({
  id: "123",
  type: "BUY",
  price: 123,
  qty: BigInt(123),
});

orderDB.instance.set({
  id: "124",
  type: "SELL",
  price: 123,
  qty: BigInt(123),
});

unsubcriber();

orderDB.instance.set({
  id: "125",
  type: "BUY",
  price: 123,
  qty: BigInt(123),
});
