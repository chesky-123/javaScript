import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI;

const client = new MongoClient(MONGO_URI);

const db = client.db("game_menager");

export const playersCollection = db.collection("players")

export const roundCollection = db.collection("round")

