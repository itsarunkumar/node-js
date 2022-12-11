const router = require("express").Router();
const mainController = require("../controllers/userController");
const authenticateToken = require("../middlewares/authMiddleware");

router.get("/", authenticateToken, mainController.sample);
router.post("/signup", mainController.signup);
router.post("/login", mainController.login);

module.exports = router;
