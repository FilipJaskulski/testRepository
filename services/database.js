const mongoose = require("mongoose");

const mongoDB = "mongodb://127.0.0.1/test2";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

module.exports = mongoose;
