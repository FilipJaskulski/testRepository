const app = require("../server");
const user = require("./api/user");
const profile = require("./api/profile");
const coach = require("./api/coach");
const training = require("./api/training");

app.use("/api", user);
app.use("/api", profile);
app.use("/api", coach);
app.use("/api", training); 
