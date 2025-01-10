import { Order } from "./types";
interface BaseRecord {
  id: string;
}

interface DatabaseSingleton<T extends BaseRecord> {
  set(data: T): void;
  get(id: string): T;
}

function createDatabaseSingletonV1<T extends BaseRecord>() {
  class InMemoryDatabase implements DatabaseSingleton<T> {
    private db: Record<string, T> = {};

    public set(data: T): void {
      this.db[data.id] = data;
    }

    public get(id: string): T {
      return this.db[id];
    }
  }

  // Return the db
  const db = new InMemoryDatabase();
  return db;
}

function createDatabaseSingletonV2<T extends BaseRecord>() {
  class InMemoryDatabase implements DatabaseSingleton<T> {
    private db: Record<string, T> = {};

    // Create a instance with private constructor
    public static instance: InMemoryDatabase = new InMemoryDatabase();
    private constructor() {}

    public set(data: T): void {
      this.db[data.id] = data;
    }

    public get(id: string): T {
      return this.db[id];
    }
  }

  return InMemoryDatabase;
}

// Just call once
const orderDBV1 = createDatabaseSingletonV1<Order>();
orderDBV1.set({
  id: Date.now().toString(),
  type: "BUY",
  price: 243,
  symbol: "AAPL",
  qty: BigInt(123),
});

// Just call once but with instance
const orderDBV2 = createDatabaseSingletonV2<Order>();
orderDBV2.instance.set({
  id: Date.now().toString(),
  type: "BUY",
  price: 243,
  symbol: "AAPL",
  qty: BigInt(123),
});

// Caution with test in Jest with Singletons, restart flush out the model cache
console.log(orderDBV1.get("100"));
console.log(orderDBV2.instance.get("101"));
