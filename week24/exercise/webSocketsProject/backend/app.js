import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io'
import 'dotenv/config';
import { router } from './routes/router.js';


const PORT = process.env.PORT;



const app = express();

app.use(cors());

app.use(express.json());

app.use("",router)

const server = http.createServer(app)

const io = new Server(server, {
    cors:{
        origin:[`http://localhost:${PORT}`]
        // ,methods:["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log(`user connected: ${socket.id}`);
    socket.on('disconnected', () => {
        console.log(`user disconnected: ${socket.id}`);
        
    })
})



app.listen(PORT, (e) => {
    if (e) return console.error(e.message);
    console.log(`server running on http://localhost:${PORT}`);

})
