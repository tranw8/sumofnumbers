// eslint-disable-next-line import/no-extraneous-dependencies
const _ = require('underscore');

function sumFor(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function sumWhile(arr) {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum;
}

function sumRecursion(arr, index = 0) {
  if (index === arr.length) {
    return 0;
  }
  return arr[index] + sumRecursion(arr, index + 1);
}

function sumTheSimpleWay(arr) {
  return _.reduce(arr, function (sum, num) {
    return sum + num;
  }, 0);
}

const numbers = [1, 2, 3, 4, 5];

console.log(sumFor(numbers)); // Output: 15
console.log(sumWhile(numbers)); // Output: 15
console.log(sumRecursion(numbers)); // Output: 15
console.log(sumTheSimpleWay(numbers)); // Output: 15
