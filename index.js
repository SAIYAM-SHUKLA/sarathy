const express = require('express')
const app = express()
const ejs = require("ejs")
const path = require("path")
// const multer = require("multer")
// const bootstrap = require("bootstrap")
const mongoose = require("mongoose")
//code for server

app.use(express.static(path.join(__dirname,"public")))
app.listen(process.env.PORT||8080,()=>console.log("listning on 8080")) 
app.set("view engen","ejs")
app.set("views",path.join(__dirname,"/views"))


// app.use(express.static(path.join(__dirname,"./public/upload/")))
app.use('/static', express.static(path.join(__dirname, 'public')))
//connect to mongoose
// getting-started.js
// const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}
// routs 
app.get("/",(req,res)=>{
    res.render("first.ejs")

})
app.get("/hello",(req,res)=>{
  res.render("one.ejs")
})
app.get("/hotels",(req,res)=>{
  res.render("hotels.ejs")
})