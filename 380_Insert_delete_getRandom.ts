class RandomizedSet {
  private elements: number[];
  private indexMap: Map<number, number>;

  constructor() {
    this.elements = [];
    this.indexMap = new Map();
  }

  insert(val: number): boolean {
    if (this.indexMap.has(val)) return false;
    this.elements.push(val);
    this.indexMap.set(val, this.elements.length - 1);
    return true;
  }

  remove(val: number): boolean {
    if (!this.indexMap.has(val)) return false;

    const index = this.indexMap.get(val)!;
    const lastElement = this.elements[this.elements.length - 1];

    this.elements[index] = lastElement;
    this.indexMap.set(lastElement, index);
    this.elements.pop();
    this.indexMap.delete(val);
    return true;
  }

  getRandom(): number {
    const randomFromArray = Math.floor(Math.random() * this.elements.length);
    return this.elements[randomFromArray];
  }
}

const obj = new RandomizedSet();
console.log(obj.insert(1));
console.log(obj.remove(2));
console.log(obj.insert(2));
console.log(obj.insert(3));
console.log(obj.remove(2));
console.log(obj.getRandom());
