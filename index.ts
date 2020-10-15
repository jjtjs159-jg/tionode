const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 8080;

app.use(cors());

app.use(bodyParser.json());
app.get("/", (req, res) => {
  const values = {
    name: "jg ss",
  };
  return res.json(values);
});

app.get("/teacher", (req, res) => {
  const values = {
    name: "jg teacher!!",
  };
  return res.json(values);
});

const server = app.listen(8080, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log("Server is working : PORT - ", port);
});
