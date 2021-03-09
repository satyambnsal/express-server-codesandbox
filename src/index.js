const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.post("/signup", function (req, res) {
  console.log(req.body);
  res.send("received1");
});

app.listen(8080, function () {
  console.log("server running on 8080");
}); //the server object listens on port 8080

// STATUS: this works when sending GET or POST request

module.exports = app;
