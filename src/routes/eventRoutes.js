const eventController = require("../controllers/eventController");
const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

router.get("/", eventController.getEvents);
router.get("/:id", eventController.getEvent);
router.post("/", auth.verifyToken, eventController.createEvent);
router.put("/:id", auth.verifyToken, eventController.updateEvent);
router.delete("/:id", auth.verifyToken, eventController.deleteEvent);

module.exports = router;
