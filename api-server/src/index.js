require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { connect } = require("nats");

const cryptoRoutes = require("./routes/cryptoRoutes");
const storeCryptoStats = require("./services/cryptoService");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", cryptoRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

app.get("/", (req,res)=>{
res.send("API Server Running")
})

const startNats = async ()=>{

const nc = await connect({
servers:"nats://localhost:4222"
});

const sub = nc.subscribe("crypto.update");

console.log("Listening for events...");

for await (const msg of sub){

console.log("Event received");
await storeCryptoStats();

}

}

startNats();

app.listen(process.env.PORT || 5000, ()=>{
console.log("Server running")
})