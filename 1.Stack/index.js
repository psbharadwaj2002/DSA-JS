// let letters = [];
// let words = "racecar";
// let rev_word = "";

// for (let i = 0; i < words.length; i++) {
//   letters.push(words[i]);
// }

// console.log(letters.peek());

// // for (let i = 0; i < words.length; i++) {
// //   rev_word += letters.pop();
// // }

// // if (words === rev_word) {
// //   console.log(`${words} is a palindrome`);
// // } else {
// //   console.log(`${words} is a not palindrome`);
// // }

// // console.log(letters.peek)

class Stack {
  constructor() {
    this.items = [];
  }

  // items = [];
  push(value) {
    this.items.push(value);
  }

  pop() {
    this.items.pop();
  }

  peek() {
    if (this.items.length === 0) {
      return "underflow";
    }
    return this.items[this.items.length - 1];
  }

  length() {
    return this.items.length;
  }

  print() {
    console.log(this.items);
  }
}

let a = new Stack();
a.push(1);
a.push(2);
a.pop();
console.log(a.length());
a.print();
console.log(a.peek());
