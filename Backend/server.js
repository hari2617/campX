import express from "express";

const app=express();
const port=5000;

app.get("/",(req,res)=>{
    res.send("Hello 2026...!");
})


app.listen(port,()=>{
    console.log("Hello 2026...!");
})