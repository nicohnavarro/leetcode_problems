import { Order } from "./types";
interface BaseRecord {
  id: string;
}

interface DatabaseFactory<T extends BaseRecord> {
  set(data: T): void;
  get(id: string): T;
}

// Factory pattern
function createDatabaseFactory<T extends BaseRecord>() {
  class InMemoryDatabase implements DatabaseFactory<T> {
    private db: Record<string, T> = {};

    public set(data: T): void {
      this.db[data.id] = data;
    }

    public get(id: string): T {
      return this.db[id];
    }
  }

  return InMemoryDatabase;
}

const OrderDB = createDatabaseFactory<Order>();
const orderDB = new OrderDB();
orderDB.set({
  id: "123",
  type: "BUY",
  price: 123,
  qty: BigInt(123),
});

console.log(orderDB.get("123"));
