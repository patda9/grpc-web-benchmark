import express = require("express");

const app: express.Application = express();
const cors = require("cors");

app.set("view engine", "pug");
app.set("views", ".");
app.use(cors());

const oneToN = (n: number): number[] => {
  return [...Array(n)].map((_, i) => i + 1);
};

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.get(["/one-to-n", "/one-to-n/:n"], (req, res) => {
  const rows = parseInt(req.params.rows);

  const n = rows ? (rows > 10000000 ? 10000000 : rows) : 10000000;
  const response = oneToN(n);

  console.time("sendBenchmarkResponse");
  res.send({ one_to_n: response });
  console.timeEnd("sendBenchmarkResponse");
});

app.listen(3030, () => {
  console.log("App is listening on port 3030!");
});
