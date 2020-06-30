const app = require("../server");
const user = require("./api/user");
const profile = require("./api/profile");
const coach = require("./api/coach");
const { connect } = require("./api/user") 
|| require("./api/profile") 
|| require("./api/coach")
|| require("./api/training");
//const {connect} = require("./api/training") 
//czy powinienem to zrobić to przy uzyciu || czy wypisywac za kazdym razem const {connect} = require.... ?
app.use("/api", user);
app.use("/api", profile);
app.use("/api", coach);
//app.use("/api", training); -> dlaczego tutaj training wyskakuje mi jako niezdefiniowany? nie moge doszukać się błedu
