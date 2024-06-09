const userController = require("../controllers/userController");
const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

router.get("/", auth.verifyToken, userController.getUser);
router.put("/", auth.verifyToken, userController.updateUser);
router.delete("/", auth.verifyToken, userController.deleteUser);

module.exports = router;
