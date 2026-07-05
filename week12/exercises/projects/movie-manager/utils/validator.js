import { question, questionFloat, questionInt } from "readline-sync";
import mng from "./../services/movie-service.js";



function createId() {
    let id = 0
    return function updateId() {
        id += 1
        return id
    }
}

const idGenerator = createId()


async function showAllMovies(params) {
    return await mng.getAllMovies()
};


async function showById() {
    try {
        const moviesId = questionInt("please enter the movie id: ")
        return mng.getById(moviesId)
    }
    catch (e) {
        return e
    }

}

async function createNewMovie() {
    try {
        const movieId = idGenerator();
        const title = question("please enter the name of the movie: ")
        const genre = question("please enter the genre: ")
        const year = questionInt("please enter the year the movie was released: ")
        const rating = await updateRate();
        const data = { id: movieId, title, genre, year, rating }
        if (await mng.createNewMovie(data)) {
            console.log("movie created successfuly");
            return "Movie created successfully!";
        }else {
            return "Failed to create movie.";}
    } catch (e) {
        return "Error: " + e
    }

}

async function deleteMovie() {

}

async function updateRate() {
    try{
        const newRate = questionFloat("pleas enter the rating: ");
        return newRate;
    }catch (e){
        return e
    };
};

async function searchByName() {

}

async function sortByGenre() {

}

async function showStatistics() {

}

export default {
    showAllMovies,
    showById,
    createNewMovie,
    deleteMovie,
    updateRate,
    searchByName,
    sortByGenre,
    showStatistics
}














