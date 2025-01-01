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
    console.log("elements", this.elements);
    console.log("indexMap", this.indexMap);
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
    console.log("elements", this.elements);
    console.log("indexMap", this.indexMap);
    return true;
  }

  getRandom(): number {
    console.log("elements", this.elements);
    console.log("indexMap", this.indexMap);
    const randomFromArray = Math.floor(Math.random() * this.elements.length);
    return this.elements[randomFromArray];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
