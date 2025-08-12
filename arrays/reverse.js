const arr = [2, 8, 4, 5, 6, 9, 3, 1, 8];

// reverse

// two pointer method

// let left = 0;
// let right = arr.length - 1;

// while (left < right) {
//   let temp = arr[left];
//   console.log(temp)
//   arr[left] = arr[right];
//   arr[right] = temp;
//   left++;
//   right--;
// }

// console.log(arr);

let left = 0;
let right = arr.length - 1;
let temp = arr[0];

while (left < right) {
  temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;

  left++;
  right--;
}

console.log(arr);
