const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const http = require('http').Server(app);
const io = require('socket.io')(http).of("/connect");

mongoose.connect("mongodb+srv://mchoy:Password123@listapp-fc5hq.mongodb.net/test?retryWrites=true");

const db = mongoose.connection;

db.on("error", err => {
  console.log(err)
}).once("open", () => {
  http.listen(process.env.PORT || 8080);
})
app.use(express.static(path.join(__dirname, 'build')));

app.get('/',function(req, res){
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const Schema = mongoose.Schema;

const listSchema = new Schema(
  {
    name: String,
    items: [{item:String,checked:Boolean}]
  },
  {
    collection: "lists"
  }
)

const List = mongoose.model("lists", listSchema);

io.on("connection", socket => {
  console.log("A user connected");

})
