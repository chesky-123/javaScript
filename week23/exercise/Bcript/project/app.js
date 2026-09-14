import { checkPassword, hashPassword, registerUser } from "./services/usersService.js";




// const result = await usersService.register(
//     username,
//     password
// );

// const result = await hashPassword("123456");

// console.log(result);

// console.log(
//     await checkPassword("123456", result)
// );

// console.log(
//     await checkPassword("999999", result)
// );


const user = await registerUser("chesky", "327531331")
console.log(user.password !== "327531331");



const result = await checkPassword("327531331", user.password);
console.log(result);


const result_ = await checkPassword(
    "999999",
    user.password
);

console.log(result_);



console.log(user);

