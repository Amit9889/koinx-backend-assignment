const cron = require("node-cron");
const { connect } = require("nats");

const start = async ()=>{

const nc = await connect({
servers:"nats://localhost:4222"
});

console.log("Worker Started");

cron.schedule("*/1 * * * *", async ()=>{

await nc.publish(
"crypto.update",
Buffer.from(
JSON.stringify({
trigger:"update"
})
)
);

console.log("Event Published");

});

}

start();