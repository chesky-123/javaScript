import router from "./routs/ordersRouter.js";
import express from "express";


const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use("/orders",router);


app.listen(PORT ,()=>{
    console.log("server running in port",PORT,"...");
    
})
