import { writeFile } from "fs/promises";
import { readFile } from "fs/promises";


const JSON_PATH = process.env.JSON_PATH;

async function writeToJson(JSON_PATH,data) {
    try{
        await writeFile(JSON_PATH,data,"utf-8");
        return true
    }catch(e){
        return e
    }
}

async function getDataFromJson(JSON_PATH) {
    try{
        const data = await readFile(JSON_PATH,"utf-8");
        return data
    }catch(e){
        return e
    }
}



