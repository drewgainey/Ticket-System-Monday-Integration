const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/", (req, res) => {
  const challenge = req.body.challenge;
  console.log(challenge);
  console.log(JSON.stringify({challenge: challenge}));
  res.status(200).send(JSON.stringify({challenge: challenge}));
});

app.listen(port, () => {
  console.log(`API is ready on http://localhost:${3001}`);
});
