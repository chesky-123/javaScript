import { ObjectId } from "bson";
import { playersCollection, roundCollection } from "../db/db.js"





export async function createPlayerService(player) {
    const result = await playersCollection.insertOne(player)
    return { _id: result.insertedId, ...player }
};


export async function findPLayerById(id) {
    const result = await playersCollection.find({ _id: new ObjectId(id) }).toArray();
    return result
}

export async function findRoundById(id) {
    const result = await roundCollection.find({ playerId: id }).toArray();
    return result
}


export async function startRoundService(data) {
    const result = await roundCollection.insertOne(data);
   
    
    return {
        roundId:result.insertedId,
        playerCards:data.playerCards,
        dealerUpCard:data.dealerCards[0]
    }
}

export async function updateChipsService(id, chips) {
    
    const res = await playersCollection.findOneAndUpdate(
        {_id: new ObjectId(id)},
        {$set: { chips: chips }},
        {returnDocument:"after"}
    )
    
    return res.chips;
};
