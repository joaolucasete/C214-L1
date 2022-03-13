import express from "express";

const app = express();

app.use(express.json());

app.post("/sum", (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a + b });
});

app.post("/sub", (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a - b });
});

app.post("/mul", (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a * b });
});

app.post("/div", (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a + b });
});

app.get("/", (req, res) => {
  res.json({
    description:
      "It's possible perform sum, sub, div and mul operations, just make a post request and pass the a and b values",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
