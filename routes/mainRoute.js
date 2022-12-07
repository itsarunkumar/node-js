const router = require("express").Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.sample);
router.post("/signup", mainController.signup);

module.exports = router;
