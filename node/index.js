const express = require("express");
const setupDb = require("./db/mysql");

const app = express();
const PORT = 3000;

setupDb();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
