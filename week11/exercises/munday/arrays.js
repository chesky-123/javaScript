

// const fruits = ["apple", "banana", "cherry"];

// fruits[1] = "mango"
// console.log(fruits)

// fruits.push("orange")
// console.log(fruits)
// fruits.unshift("banana")

// console.log(fruits)

// fruits.pop()
// console.log(fruits)
// fruits.shift()
// console.log(fruits)

// const arr = ["a", "b", "c", "d"];
// arr.splice(1,1)
// console.log(arr)
// const arr2 = arr.splice(1,0,"x")
// console.log(arr)
// arr.splice(3,2,"y")
// console.log(arr)


// const numbers = [5, 10, 15]

// const sum = numbers.reduce((acc, number) => acc + number)
// console.log(sum)

// const numbers = [3, 8, 12, 1];
// const nums = numbers.filter((num) => num > 5);
// console.log(nums)

// 1

// const numbers = [1, 2, 3, 4, 5];

// const doubleNums = numbers.map((num) => {
//   return num * 2;
// })
// console.log(doubleNums)

// 2

// const arr = ["hello", "world"];
// const upperCase = arr.join().toUpperCase()
// console.log(upperCase)

// 3

// const prices = [100, 120, 85, 67];
// const pricesVitwVAT = prices.map((price => Math.round(price * 1.17)))
// console.log(pricesVitwVAT)

// 4

// const nums = [1, 2, 3, 4, 5, 6];
// const doubleNums = nums.filter((num => num % 2 === 0));
// console.log(doubleNums)

// 5

// const arr = ["hi", "hello", "cat", "javascript"];
// const lengthThry = arr.filter((item => item.length > 3));
// console.log(lengthThry)

// 6

// const users = [{ name: "Avi", age: 17 }, { name: "Dana", age: 22 }];
// const beggerThen18 = users.filter((user => user.age > 18));
// console.log(beggerThen18)

// 7

// const users = [{ name: "Avi", age: 17 }, { name: "Dana", age: 22 }];
// const userName = users.map((user => user.name))
// console.log(userName)

// 8

// const prices = [100, 120, 85, 67];
// const pricesWithTen = prices.filter((price) => {
//   return price >= 100;
// }).map((price) => {
//   return price * 1.1;
// });
// console.log(pricesWithTen);

////////////////////חלק ב'////////////////////////////////////

// 9

// const nums = [10, 20, 30];
// const sum = nums.reduce((acc, num) => {
//   return acc + num
// },0);

// console.log(sum)

// 10

// const nums = [10, 20, 30];
// const sum = nums.reduce((acc, num) => {
//   return acc * num;
// },2);

// console.log(sum);

// 11

// const arr = ["a", "b", "c"];

// console.log(arr.reduce((acc, char) => {
//   return acc + char
// }))

// 12

// const users = [{ name: "Avi", age: 17 },
//   { name: "Dana", age: 22 }]
//   ;

// const sum = users.reduce((acc, user) => {
//   return acc + user.age;
// },0);

// console.log(sum / users.length);

// 13

// const nums = [1, 2, 3, 4, 5, 6];

// const result = nums.reduce((acc, num) => {
//   const key = (num % 2 === 0 ? "even" : "odd")
//   acc[key] += 1;
//   return acc;
// }, { even: 0, odd: 0 })

// console.log(result)

// //////////////////////חלק ג'//////////////////////////////

// 14

// const nums = [23, 60, 45, 88, 17, 51, 34]

// console.log(nums.find(num => num > 50))

// 15

// const users = [{ name: "Avi", age: 17, "id":888},
//   { name: "Dana", age: 22, "id": 7946 }];


// console.log(users.find((user => user.id === 7946)))

// 16

// const nums = [23, 60, -28, 51, 34];
// console.log(nums.some((num => num < 0)));

// 17

// const nums = [23, 60, 28, 51, 34];
// console.log(nums.every((num => num > 0)));

// 18

// const users = [{ name: "Avi", age: 17 }, { name: "Dana", age: 22 }];
// console.log(users.every((user => user.age > 18)));

/////////////////////////חלק ד' ////////////////////////////

// 19

// const fruits = ["chery", "apple", "oranj"];
// console.log(fruits.includes("apple"));

// 20

// const nums = [23, 60, 28, 51, 34];

// console.log(nums.indexOf(28));

// 21

// const nums = [23, 60, 28, 51, 34];

// console.log(nums.includes(51,2));

///////////////////////חלק ה'///////////////////////////////////

// 22

// const fruits = ["chery", "apple", "oranj"];

// fruits.forEach((item, index) => {
//   console.log(item, index);
// });

// 23

// const fruits = ["chery", "apple", "oranj"];
// const arr = [];

// fruits.forEach((item) => {
//   arr.push(item)
// })
// console.log(arr)

//////////////////////////////חלק ו'//////////////////////////////////

// 24

// const nums = [23, 60, 28, 51, 34];

// const sorted = nums.sort((a, b) => a - b);
// console.log(sorted)

// 25

// const nums = [23, 60, 28, 51, 34];

// const sorted = nums.sort((a, b) => b - a);
// console.log(sorted);

// 26

// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Mouse", price: 25 },
//   { name: "Keyboard", price: 100 },
//   { name: "Monitor", price: 300 },
//   { name: "Headphones", price: 50 }
// ];

// const sortProducts = products.sort((a, b) => a.price - b.price);
// console.log(sortProducts)

// 27

// const nums = [23, 60, 28, 51, 34];
// console.log(nums.reverse())

////////////////////////חלק ז'///////////////////////////////

// 28

// const nums = [23, 60, 45, 88, 17, 51, 34];
// console.log(nums.slice(2, 5));

// 29

const nums = [23, 60, 45, 88, 17, 51, 34];
const arr = nums.slice(1,4);
console.log(arr);

// 30



























