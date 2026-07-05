import { keyInSelect } from "readline-sync";
import mng from "./utils/validator.js"

async function showMenuMovieSistem() {
    try {
        const actions = [
            { "label": "Show all movies", "action": mng.showAllMovies },
            { "label": "Show by id", "action": mng.showById },
            { "label": "Create new movie", "action": mng.createNewMovie },
            { "label": "Delete movie", "action": mng.deleteMovie },
            { "label": "Update rate", "action": mng.updateRate },
            { "label": "Search by name", "action": mng.searchByName },
            { "label": "Sort by genre", "action": mng.sortByGenre },
            { "label": "Show statistics", "action": mng.showStatistics }
        ];


        let selections;

        do {
            console.log(`
        ============================== 
        Movie Collection Manager
        ==============================`);
            selections = keyInSelect(actions.map(a => a.label), "Please select the action you want to take: ", { cancel: "Exit" });
            if (selections >= 0) {
                console.log(await actions[selections].action());

            };
        }
        while (selections !== -1);
    }
    catch (e) {
        console.log("somthing wrong");

    }
}

async function init() {
    await showMenuMovieSistem();
}
init().catch(err => console.error(err));





