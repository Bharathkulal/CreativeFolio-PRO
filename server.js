const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let portfolios = [];

// CREATE
app.post("/api/portfolio/create",(req,res)=>{
    let id = Date.now();
    portfolios.push({id, html:""});
    res.json({id});
});

// SAVE
app.post("/api/portfolio/save/:id",(req,res)=>{
    let p = portfolios.find(x=>x.id==req.params.id);
    if(p){
        p.html = req.body.html;
    }
    res.json({msg:"saved"});
});

// GET
app.get("/api/portfolio/:id",(req,res)=>{
    let p = portfolios.find(x=>x.id==req.params.id);
    res.send(p ? p.html : "Not Found");
});

// GALLERY UPLOAD (Mock)
app.post("/api/gallery/upload",(req,res)=>{
    res.json({msg:"Image uploaded"});
});

// PAYMENT (Mock)
app.post("/api/payment",(req,res)=>{
    res.json({msg:"Payment success"});
});

// ANALYTICS (Mock)
app.get("/api/analytics",(req,res)=>{
    res.json({
        views:1200,
        devices:{mobile:70,desktop:30}
    });
});

app.listen(5000,()=>console.log("Server running"));