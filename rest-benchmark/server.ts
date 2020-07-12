import express = require("express");

const app: express.Application = express();

const nOneToThousandRows = (n: number): { [row: number]: number[] }[] => {
  return [...Array(n)].map((_, i) => {
    let temp: { [row: number]: number[] } = {};
    temp[i + 1] = [...Array(1000)].map((_, j) => j + 1);

    return temp;
  });
};

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.get(["/one-to-thousand", "/one-to-thousand/:rows"], (req, res) => {
  const rows = parseInt(req.params.rows);

  const n = rows ? (rows > 1000 ? 1000 : rows) : 1000;
  const response = nOneToThousandRows(n);

  res.json(response);
});

app.listen(3030, () => {
  console.log("App is listening on port 3030!");
});
