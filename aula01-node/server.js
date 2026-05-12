import express from 'express'
const app = express();
const port = 3000;
import './src/database/sqlConnection.js';

app.get("/",(req,res)=>{
    res.send({mesage:"servidor ativo!"})
});

app.get("/hello",(req,res)=>{
    res.send({mesage:"Hello wolrd"})
});

app.get("/info",(req,res)=>{
    res.json({
        curso:"senai",
        local:"palhoça"
    })
});

app.get("/get",(req,res)=>res.json({banco:"SQL",status:"conectado"}))

app.listen(port,()=>{console.log("Rodando na porta"+port)});