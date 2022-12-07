const User = require("../models/mainModel");

exports.sample = function (req, res) {
  res.json({ message: "Hello World" });
};

exports.signup = async (req, res) => {
  let name = req.body.name;
  let password = req.body.password;
  let email = req.body.email;

  const user = await User.create({
    name: name,
    password: password,
    email: email,
  });

  res.json({
    message: "success",
    data: user,
  });
};
