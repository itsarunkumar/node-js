// const router = require("express").Router();
// const uploadController = require("../controllers/uploadController");

// const multer = require("multer");
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads");
//   },
//   filename: function (req, file, cb) {
//     // cb(null, file.originalname);
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// let path =
//   "https://drive.google.com/drive/folders/1d7xEL5SUZB0deqR4aIM2q_zuTl3ACcfY?usp=sharing";

// const upload = multer({ storage: storage });

// router.post("/", upload.single("file"), uploadController.uploadFile);

// module.exports = router;
