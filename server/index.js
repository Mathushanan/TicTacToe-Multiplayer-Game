const express = require("express");
const http = require("http");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;
var server = http.createServer(app);


var io = require("socket.io")(server);

// middle ware
app.use(express.json());


const DB =
  "mongodb+srv://user1:user1@cluster0.m7qff6i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection successful!");
  })
  .catch((e) => {
    console.log(e);
  });

server.listen(port, "0.0.0.0", () => {
    console.log(`Server started and running on port ${port}`);
  });