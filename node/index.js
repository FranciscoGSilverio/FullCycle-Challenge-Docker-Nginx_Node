const express = require("express");
const setupDb = require("./db/mysql");
const { join } = require("path");

const app = express();
const PORT = 3000;
const htmlPATH = join(__dirname, "public", "index.html");
setupDb();

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(htmlPATH);
});

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
