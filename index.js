const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 3001;

//handle CORS error
app.use(cors());

//mount API router
app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/", (req, res) => {
  console.log(req.body);
  console.log(JSON.stringify(req.body, 0, 2));
  res.status(200).send(req.body);
});

app.listen(port, () => {
  console.log(`API is ready on http://localhost:${3001}`);
});
