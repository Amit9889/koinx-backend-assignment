const express = require("express");
const router = express.Router();

const Crypto = require("../models/Crypto");


// Stats API

router.get("/stats", async(req,res)=>{

try{

const coin = req.query.coin;

const data = await Crypto.findOne({coin})
.sort({createdAt:-1});

res.json({
price:data.price,
marketCap:data.marketCap,
"24hChange":data.change24h
});

}catch(error){

res.status(500).json({error:error.message});

}

});



// Deviation API

router.get("/deviation", async(req,res)=>{

try{

const coin = req.query.coin;

const records = await Crypto.find({coin})
.sort({createdAt:-1})
.limit(100);

const prices = records.map(r=>r.price);

const mean =
prices.reduce((a,b)=>a+b,0) / prices.length;

const variance =
prices.reduce(
(sum,price)=> sum + Math.pow(price-mean,2),
0
) / prices.length;

const deviation = Math.sqrt(variance);

res.json({
deviation:Number(deviation.toFixed(2))
});

}catch(error){

res.status(500).json({error:error.message});

}

});

module.exports = router;