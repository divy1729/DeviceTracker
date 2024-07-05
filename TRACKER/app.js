const express = require('express');
const app = express();
const path = require("path");

const http = require("http");
const socketio = require("socket.io");
const server = http.createServer(app);
const io = socketio(server);

// setting ejs
app.set("view engine", "ejs");
app.set(express.static(path.join(__dirname, "public")));
app.use(express.static(__dirname + '/public'));

io.on("connection", function (socket) {
    socket.on("send-location",function(data){
        io.emit("receive-location",{id:socket.id,...data })
    });
    socket.on("disconnect", function(){
        io.emit("user disconnected",socket.id);
    })
  console.log("connected");
});



app.get("/", function (req, res) {
  res.render("index"); // render the index.ejs template
});

server.listen(3000, function () {
  console.log("Server listening on port 3000");
});