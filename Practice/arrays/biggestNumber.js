const arr = [8, 2, 6, 9, 2, 1, 6];

// biggest number

let biggest = arr[0];
for (let num of arr) {
  if (biggest < num) biggest = num;
}
console.log(`biggest number is ${biggest}`);
