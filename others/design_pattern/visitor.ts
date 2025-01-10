import { Order } from "./types";

interface BaseRecord {
  id: string;
}

interface Database<T extends BaseRecord> {
  set(data: T): void;
  get(id: string): T;
  visit(visitor: (item: T) => void): void;
}

function createDatabase<T extends BaseRecord>() {
  class InMemoryDatabase implements Database<T> {
    private db: Record<string, T> = {};
    static instance: InMemoryDatabase = new InMemoryDatabase();
    private constructor() {}

    public set(data: T): void {
      this.db[data.id] = data;
    }

    public get(id: string): T {
      return this.db[id];
    }

    visit(visitor: (item: T) => void): void {
      Object.values(this.db).forEach(visitor);
    }
  }
  return InMemoryDatabase;
}

const orderDB = createDatabase<Order>();
orderDB.instance.set({
  id: Date.now().toString(),
  type: "BUY",
  price: 243,
  symbol: "AAPL",
  qty: BigInt(123),
});

orderDB.instance.set({
  id: Date.now().toString(),
  type: "BUY",
  price: 243,
  symbol: "AAPL",
  qty: BigInt(123),
});

orderDB.instance.visit((item) => console.log(`${item.id} - ${item.type}`));
