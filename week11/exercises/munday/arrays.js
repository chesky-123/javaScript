

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

const nums = [1, 2, 3, 4, 5, 6];

const result = nums.reduce((acc, num) => {
  const key = (num % 2 === 0 ? "even" : "odd")
  acc[key] += 1;
  return acc;
}, { even: 0, odd: 0 })

console.log(result)






git remote add origin https://github.com/chesky-123/javaScript.git

















