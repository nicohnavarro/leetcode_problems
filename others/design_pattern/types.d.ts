export interface Order {
  id: string;
  type: "BUY" | "SELL";
  price: number;
  qty: BigInt;
}
