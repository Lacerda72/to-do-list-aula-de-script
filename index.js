const express = require("express");
const app = express();

// ROTA
app.get("/home", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);
