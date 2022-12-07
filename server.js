const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
  console.log("Connected to DB");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
