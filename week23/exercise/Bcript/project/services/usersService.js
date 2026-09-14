import bcrypt from "bcrypt";



export async function hashPassword(password) {
    const hashedPassword = bcrypt.hashSync(password, 10);
    return hashedPassword
}


export async function checkPassword(password, hash) {
    const checkedPassword = bcrypt.compareSync(password, hash);
    return checkedPassword
};


export async function registerUser(username, password) {
    const hash = await hashPassword(password);
    return {
        username,
        password: hash
    }
};


async function loginUser(password, savedHash) {

}




