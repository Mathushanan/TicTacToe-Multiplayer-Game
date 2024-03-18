const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app); // Create HTTP server
const io = require("socket.io")(server); // Attach Socket.IO to the HTTP server
const Room=require("./models/room");

// Middleware
app.use(express.json());




const DB =
    "mongodb+srv://user1:user1@cluster0.m7qff6i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

io.on("connection", (socket) => {
    console.log("A user connected");
    socket.on("createRoom", async ({nickname})=>{
      console.log(nickname);

      try {
        // room is created
        let room = new Room();
        let player = {
          socketID: socket.id,
          nickname,
          playerType: "X",
        };
        room.players.push(player);
        room.turn = player;
        room = await room.save();
        console.log(room);
        const roomId = room._id.toString();
  
        socket.join(roomId);


        // io -> send data to everyone
        // socket -> sending data to ourelf
        io.to(roomId).emit("createRoomSuccess", room);

        
      } catch (e) {
        console.log(e);
      }
    });
});





mongoose
    .connect(DB)
    .then(() => {
        console.log("MongoDB Connection successful!");
    })
    .catch((e) => {
        console.log(e);
    });

server.listen(port, "0.0.0.0", () => {
    console.log(`Server started and running on port ${port}`);
});
