// 1

// const name = "moshe"

// const getWelcome = function(name) {
//   console.log("Hello " + name)
// }
// getWelcome(name)

// 2

// const sum = (a, b) => a + b;
// console.log(sum(2, 2));

// 3

// function bool(num) {
//   return num % 2 == 0;
// }

// console.log(bool(2))

// 4

// function getIndexOne(arr = [null]) {
//  return(arr[0]);
// };

// const arr = [1,2,3,4,5,6]
// console.log(getIndexOne(arr))

// 5

// const uppertext = function (text) {
//   return text.toUpperCase()
// }

// const text = "hello world"
// console.log(uppertext(text))

// 6

// let x = 5;

// function test() {
//   let x = 10;
//   console.log(x); // ידפיס 10
// }

// test();
// console.log(x); //ידפיס 5"

// ידפיס 10 ואח"כ ידפיס 5"

// 7

// function test() {
//   const y = 10;
//   return y
// }

// const item = test();
// console.log(item);

// 8

// let x = 1;

// function a() {
//   console.log(x);
// }

// function b() {
//   let x = 2;
//   a();
// }

// b(); //ידפיס 1 כי זה הגלובל

// 9

// let x = 5;
// if (x < 10) {
//   const a = 7;
// };

// const funci = function () {
//   console.log(a)
// }

// funci()

// 10

// let count = 0;

// function add() {
//   let count = 0;
//   count++;
//   console.log(count)
// }

// add()
// console.log(count)

// 11

// const numbers = [1,2,3,4,5];

// const sum = function (numbers) {
//   let sumi = 0;
//   for (const number of numbers) {
//     sumi += number;
//   };
//   return sumi;
// }

// console.log(sum(numbers))

// 12

// const squared = (num) => num * num;

// function getSquare(num) {
//   console.log(squared(num))
// }
// getSquare(5)

// 13

// let x = 10;

// function test(x) {
//   return x * 2;
// }

// console.log(test(5));//ידפיס 10 כי הscope של הפונקציה לא מכיר את המשתנה החיצוני

//14

// const getDoubleNumbers = function (numbers) {
//   let doubleNumbers = []
//   for (const number of numbers) {
//     if (number % 2 === 0) {
//       doubleNumbers.push(number);
//     };
//   };
//   return doubleNumbers;
// }

// const numbers = [1, 4, 5, 2, 3, 6, 9, 7, 8, 3, 13];
// console.log(getDoubleNumbers(numbers));

// 15

let total = 0;

function addToTotal(num) {
  total += num;
}

function reset() {
  total = 0;
}

addToTotal(5);
addToTotal(10);
reset();
console.log(total);















































