import { writeFile } from "fs/promises";
import { readFile } from "fs/promises";
import fs from "fs"
import { rejects } from "assert";

const MOVIE_FILE_PATH = "./data/movies.json"



export function getDataFromJsonFile(cb) {
    fs.readFile(MOVIE_FILE_PATH, "utf-8", (e, data) => {
        if (e) {
            cb(e)
            return
        }
        else {
            cb(null, JSON.parse(data))
        }
    })

}



export function writeToJson(data,cb) {
    const strData = JSON.stringify(data)
    fs.writeFile(MOVIE_FILE_PATH, strData, "utf-8", (e) => {
        if (e)
            cb(e);
        return 
    })
}






