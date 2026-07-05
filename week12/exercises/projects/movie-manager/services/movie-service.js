import fs from "fs/promises"
import { getDataFromJsonFile as getJson, writeToJson } from "./file-service.js"

import { resolve } from "dns"
import { rejects } from "assert"




async function readMovies() {
    try {
        return new Promise((resolve, rej) => {
            getJson((err, data) => {
                if (err) {
                    rej(err);
                }
                resolve(data)
            })
        })
    } catch (e) {
        return e
    }

}

async function writeMovies(data) {
    try {
        return new Promise((res, rej) => {
            writeToJson(data, (err, message) => {
                if (err) {
                    res(err);
                } else return true
            })
        })
    } catch (e) {
        return e
    }
};



async function getAllMovies() {
    try {
        const movies = await readMovies()
        return JSON.stringify(movies, null, 2)
    } catch (e) {
        return e
    }
}


async function getById(id) {
    try {
        const movies = await readMovies();
        const movie = movies.find((mId) => mId.id === id);
        return movie || "movie not found"
    } catch (e) {
        return e
    }
};

async function createNewMovie(data) {
    try{
        const movies = await readMovies()
    movies.push(data)
    if (await writeMovies(movies)){
    return true}
    }catch(e){
        return e
    }
    

}

async function deleteMovie() {

}

async function updateRate() {


}

async function searchByName() {

}

async function sortByGenre() {

}

async function showStatistics() {

}

export default {
    getAllMovies,
    getById,
    createNewMovie
}









