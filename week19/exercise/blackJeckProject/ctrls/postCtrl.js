import { createPlayerService, startRoundService } from "../DAL/players.dal.js";
import { playersCollection } from "../db/db.js";
import { getCard, updateChips } from "../service/service.js";




export async function createPlayer(req, res, next) {
    const player = {
        "chips": 1000,
        "createdAt": new Date()
    };
    try {
        const result = await createPlayerService(player)
        return res.status(201).json(result)
    } catch (e) {
        console.error(e.message);
        res.status(500).json({ message: "server faild" })
    }
};

export async function startRound(req, res, next) {
    const round = {
        "playerId": req.body.id,
        "bet": req.body.bet,
        "playerCards": [await getCard(), await getCard()],
        "dealerCards": [await getCard(), await getCard()],
        "status": "in_progress",
        "createdAt": new Date()
    }

    if(round.playerCards[0].rank + round.playerCards[1].rank === 22) round.playerCards[1].rank = 1;
    if(round.dealerCards[0].rank + round.dealerCards[1].rank === 22) round.dealerCards[1].rank = 1;


    try {
        
        const updateChip = await updateChips(round.playerId,round.bet);

        const result = await startRoundService(round);
        
        result.chips = updateChip
        return res.status(201).json(result)

    } catch (e) {
        console.error(e.message);
        res.status(500).json({ message: "server faild" })
    }

}




