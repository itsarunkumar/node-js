const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//creating the jwt token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: 60 * 60 * 24 * 30,
  }); // 30 days
};

exports.sample = function (req, res) {
  res.json({ message: "Hello World" });
};

exports.signup = async (req, res) => {
  let name = req.body.name;
  let password = req.body.password;
  let email = req.body.email;

  try {
    if (!name || !password || !email) return;

    if (await User.findOne({ email: email })) {
      res.json({
        message: "email already exists",
      });
      return;
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    const token = createToken(user._id);

    res.cookie("jwt", token, { httpOnly: true });

    res.status(201).json({ user: user, token: token });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: error,
    });
  }
};

//login function

exports.login = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true });
    res.status(200).json({ user: user, token: token });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: error,
    });
  }
};
