const { forEach } = require("lodash");

class mySet {
  collection = [];

  has(element) {
    return this.collection.indexOf(element) !== -1;
  }

  add(element) {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  }

  values() {
    return this.collection;
  }

  size() {
    return this.collection.length;
  }

  remove(element) {
    if (this.has(element)) {
      this.collection.splice(this.collection.indexOf(element), 1);
      return true;
    }
    return false;
  }

  union(otherSet) {
    let unionSet = new mySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();

    firstSet.forEach((e) => {
      unionSet.add(e);
    });
    secondSet.forEach((e) => {
      if (!unionSet.has(e)) {
        unionSet.add(e);
      }
    });

    return unionSet;
  }

  intersection(otherSet) {
    let intersectionSet = new mySet();
    let firstSet = this.values();
    // let secondSet = otherSet.values();

    firstSet.forEach((e) => {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });

    // secondSet.forEach((e) => {
    //   if (!intersectionSet.has(e)) {
    //     intersectionSet.remove(e);
    //   }
    // });

    return intersectionSet;
  }

  subSet(otherSet) {
    let firstSet = this.values();

    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  }
}

let a = new mySet();
// let a = new Set();

a.add(1);
a.add(2);
a.add(3);

console.log(a.values());

let b = new mySet();
// let a = new Set();

b.add(4);
b.add(5);
b.add(3);

let c = a.union(b);
// console.log("c :", c);
console.log(c.values());

let d = a.intersection(b);
console.log("d :", d);

console.log(c.subSet(d))
