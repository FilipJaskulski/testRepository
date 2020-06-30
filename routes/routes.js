const app = require("../server");
const user = require("./api/user");
const { connect } = require("./api/user") || require("./api/profile");
const profile = require("./api/profile")

app.use("/api", user);
app.use("/api", profile);
