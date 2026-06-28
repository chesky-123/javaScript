import utils, { createAdder } from "./closures.js";
import { } from "./clossures.js"


const num1 = createAdder(2);
console.log(num1(5));

const uploadNum = utils.createCounter();

uploadNum();
uploadNum();
uploadNum();

const createSecret = utils.createSecret();
console.log(createSecret.getSecret());
console.log(createSecret.setSecret(4569));

const rfn = utils.once(() => { return "ween" });
console.log(rfn());
console.log(rfn());

const stack = utils.createStack();
console.log(stack.push(2))
console.log(stack.push(5))
console.log(stack.push(4))
console.log(stack.push(36))
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.peek())






















