import { Order } from "./types";

interface BaseRecord {
  id: string;
}

interface Database<T extends BaseRecord> {
  set(data: T): void;
  get(id: string): T;
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

    selectMax(scoreStrategy: (item: T) => number): T | undefined {
      const found: { max: number; item: T | undefined } = {
        max: 0,
        item: undefined,
      };

      Object.values(this.db).reduce((f, item) => {
        const score = scoreStrategy(item);
        if (score > found.max) {
          f.max = score;
          f.item = item;
        }
        return f;
      }, found);
      return found.item;
    }
  }
  return InMemoryDatabase;
}

const orderDB = createDatabase<Order>();
orderDB.instance.set({
  id: "123",
  type: "BUY",
  price: 250,
  qty: BigInt(123),
});

orderDB.instance.set({
  id: "124",
  type: "SELL",
  price: 123,
  qty: BigInt(256),
});

const maxQty = orderDB.instance.selectMax(({ qty }) => Number(qty));
const maxPrice = orderDB.instance.selectMax(({ price }) => price);
console.log("Max Quantity", maxQty);
console.log("Max Price", maxPrice);
