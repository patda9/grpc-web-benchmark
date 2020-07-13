import express = require("express");

const app: express.Application = express();

const nOneToThousandRows = (n: number): number[] => {
  return [...Array(n)].map((_, i) => i + 1)
};

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.get(["/one-to-n", "/one-to-n/:n"], (req, res) => {
  const rows = parseInt(req.params.rows);

  const n = rows ? (rows > 1000000 ? 1000000 : rows) : 1000000;
  const response = nOneToThousandRows(n);

  res.json(response);
});

app.listen(3030, () => {
  console.log("App is listening on port 3030!");
});
