const express = require("express");
const app = express();
const path = require("path")

app.get("/first",(req,res)=>{
    res.send("hello");
});

app.listen(3187   , ()=>{
    console.log("server is running");
});
