const express = require("express");
const Calculator = require("./service/calculatorService.js");

const app = express();

app.use(express.json());

const calc = new Calculator();

app.post("/add", (req, res) => {
  const { a, b } = req.body;
  res.json({ result: calc.add(a, b) });
});

app.post("/sub", (req, res) => {
  const { a, b } = req.body;
  res.json({ result: calc.sub(a, b) });
});

app.post("/mul", (req, res) => {
  const { a, b } = req.body;
  res.json({ result: calc.mul(a, b) });
});

app.post("/div", (req, res) => {
  const { a, b } = req.body;
  res.json({ result: calc.div(a, b) });
});

app.get("/", (_, res) => {
  res.json({
    description:
      "It's possible perform sum, sub, div and mul operations, just make a post request and pass the a and b values",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
