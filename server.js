const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://mchoy:Password123@listapp-fc5hq.mongodb.net/test?retryWrites=true");

const db = mongoose.connection;

db.on("error", err => {
  console.log(err)
}).once("open", () => {
  app.listen(process.env.PORT || 8080);
})
app.use(express.static(path.join(__dirname, 'build')));

app.get('/',function(req, res){
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



list:[one:true, two:false, ]