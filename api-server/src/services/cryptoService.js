const axios = require("axios");
const Crypto = require("../models/Crypto");

const coins = [
"bitcoin",
"ethereum",
"matic-network"
];

const storeCryptoStats = async ()=>{

try{

const response = await axios.get(
"https://api.coingecko.com/api/v3/simple/price",
{
params:{
ids:coins.join(","),
vs_currencies:"usd",
include_market_cap:true,
include_24hr_change:true
}
}
);

const data = response.data;

for(const coin of coins){

await Crypto.create({
coin:coin,
price:data[coin].usd,
marketCap:data[coin].usd_market_cap,
change24h:data[coin].usd_24h_change
});

}

console.log("Crypto data stored");

}catch(error){

console.log(error);

}

}

module.exports = storeCryptoStats;