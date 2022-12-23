// const router = require("express").Router();
// const multer = require("multer");
// const path = require("path");
// const fs = require("fs");
// const { v4: uuidv4 } = require("uuid");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, uuidv4() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage: storage });

// router.post("/", upload.single("file"), async (req, res) => {
//   console.log(req.file);
//   res.send("File uploaded successfully");
// });

// module.exports = router;

const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const File = require("../models/fileModel");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, uuidv4() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

//upload the file path to the database
const uploadFile = async (req, res) => {
  try {
    const file = new File({
      filename: req.file.filename,
      path: req.file.path,
      size: req.file.size,
    });
    const savedFile = await file.save();
    res.send(savedFile);
  } catch (err) {
    console.log(err);
  }
};

router.post("/", upload.single("file"), uploadFile);

module.exports = router;
