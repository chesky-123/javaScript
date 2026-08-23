import { findPLayerById, updateChipsService } from "../DAL/players.dal.js";



export async function getCard() {
    
const cardPoint = [2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "k" ,"A"];

let numCard = cardPoint[Math.floor(Math.random() * cardPoint.length)];

const typeCards = ["hearts", "diamonds", "clubs", "spades"];

const typeCard = typeCards[Math.floor(Math.random() * typeCards.length)];



if(["J", "Q", "k"].includes(numCard)) numCard = 10;

if(numCard === "A") numCard = 11;

const card = { "rank": numCard, "suit": typeCard };

return card;

}

export async function updateChips(id,bet) {
    const player = await findPLayerById(id);
    const newChips = player[0].chips -= bet
    
    const updateChips = await updateChipsService(id,newChips);
    return updateChips;
    
}