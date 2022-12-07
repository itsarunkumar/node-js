const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mainRoute = require("./routes/mainRoute");

//middlewares
app.use(bodyParser.json());
app.use(express.json());

app.use("/", mainRoute);

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

module.exports = app;
