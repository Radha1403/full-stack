const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.send({ hi: "hello" });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT);
