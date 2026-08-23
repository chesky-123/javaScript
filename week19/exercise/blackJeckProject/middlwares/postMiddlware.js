import { findPLayerById, findRoundById } from "../DAL/players.dal.js";

export async function isPlayerFound(req, res, next) {
     try {
        
        const { id } = req.body;
        const found = await findPLayerById(id);
        if(found.length === 0) res.status(404).json({message:"player allredy exists"})
            next()
    } catch (e) {
        console.error(e.message);
        res.status(500).json({ message: "somthing wrong" })
    }
}

export async function isInProgres(req, res, next) {
    try {
        const { id } = req.body;
        const rounds = await findRoundById(id);
        let flag = false;
        
        rounds.forEach(round => {
            if (round.status === "in_progress") flag = true
        });
        if (flag) return res.status(409).json({ message: "player is in progres" })
        return next()
    } catch (e) {

        console.error(e.message);
        res.status(500).json({ message: "somthing wrong" })
    }
}

export async function isValidBet(req, res, next) {
    try {
        let { id, bet } = req.body;
        bet = Number(bet)
        
        const player = await findPLayerById(id);
        
        if(bet <= 0 || bet > +player[0].chips) return res.status(400).json({message:"invalid bet"});
        next()
    } catch (e) {
        console.error(e.message);
        res.status(500).json({ message: "somthing wrong" })
    }
}



