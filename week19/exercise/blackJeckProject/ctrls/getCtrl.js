import { findPLayerById } from "../DAL/players.dal.js";



export async function getPlayerById(req,res) {
     try {
            const {id} = req.body;
            const result = await findPLayerById(id);
            return res.status(200).json(result);
        } catch (e) {
            console.error(e.message);
            res.status(500).json({message:"server faild"})
        }
}



