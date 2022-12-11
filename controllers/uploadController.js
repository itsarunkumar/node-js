const multer = require("multer");
const upload = multer({ dest: "uploads/" });

exports.uploadFile = async (req, res, next) => {
  try {
    console.log(req.body);

    console.log(req.file);

    const file = req.file;

    upload.single("file");

    if (!file) {
      const error = new Error("Please upload a file");
      error.httpStatusCode = 400;
      return next(error);
    }
    res.json({ message: "File uploaded successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: "Error while uploading the file", error: error });
  }
};
