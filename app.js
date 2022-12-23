const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userRoute = require("./routes/userRoute");
// const uploadRoute = require("./routes/uploadRoute");

//middlewares
app
  .use(
    bodyParser.urlencoded({
      extended: true,
    })
  )
  .use(bodyParser.json());
app.use(express.json());

//routes
app.use("/", userRoute);
// app.use("/upload", uploadRoute);

module.exports = app;
