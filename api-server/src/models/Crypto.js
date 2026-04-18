const mongoose = require("mongoose");

const cryptoSchema = new mongoose.Schema({

coin:{
type:String,
required:true
},

price:{
type:Number
},

marketCap:{
type:Number
},

change24h:{
type:Number
},

createdAt:{
type:Date,
default:Date.now
}

});

module.exports = mongoose.model("Crypto", cryptoSchema);