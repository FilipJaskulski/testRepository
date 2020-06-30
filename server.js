const express = require("express");
// const app = express();
const port = process.env.port || 3000;


const app = (module.exports =  express());
app.use(express.json({extended: false}))
require("./routes/routes");
require("./services/database");
app.listen(port, () => console.log("Server running at http://localhost:3000"));

