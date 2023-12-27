let a = [
  ["a", 4],
  ["b", 3],
  ["c", 2],
  ["d", 1],
];

let b = ["e", 0];

let added = false;
for (let i = 0; i < a.length; i++) {
  if (b[1] > a[i][1]) {
    a.splice(i, 0, b);
    added = true;
    break;
  }
}
if (!added) {
  a.push(b);
}

console.log(a);
