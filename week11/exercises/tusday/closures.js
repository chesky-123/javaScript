
// 1

// function createLogger() {
//   const hello = "hello";
//   function seyHello() {
//     console.log(hello);
//   } return seyHello;
// }

// const seyHello = createLogger();
// seyHello()

// 2


// function createLogger(name) {
//   const hello = "hello";
//   function helloMan() {
//     console.log(hello + " " + name);
//   } return helloMan;
// }

// const helloMan = createLogger("avi")
// helloMan()

// 3

function createCounter(num = 0) {
  function uploadNum() {
    console.log(++num);
  } return uploadNum;
}

// 5

function createMultiplier(num = 1) {
  function double(x = 1) {
    console.log(num * x);
  } return double;
};

const double = createMultiplier(2);
double(5);

// 6

export function createAdder(num = 0) {
  return function add(num2 = 0) {
    return num + num2;
  }
}

// 7

function createSecret() {
  let secret = 1234;
  return {
    getSecret: () => { return secret },
    setSecret: (newSecret) => {
      secret = newSecret;
      return secret;
    }
  };
};

// 8

function once(fn) {
  let isRonning = false
  return function rfn() {
    if (!isRonning) {
      isRonning = true
      return (fn());
    } else return "c'ant";
  };
};

// 9 /10

// for (let i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 2000);
// };

// 12

function createStack() {
  const items = [];
  const funcs = {
    push: (item) => items.push(item),
    pop: () => items.pop(),
    peek: () => items[items.length - 1]
  }; return funcs
};

// 13

function createIdGenerator() {
  let id = 0;
  function getId() {
    id++
    return id;
  } return getId
}

const id = createIdGenerator();
console.log(id())
console.log(id())
console.log(id())
console.log(id())












export default {
  createCounter,
  createSecret,
  once,
  createStack
}




















