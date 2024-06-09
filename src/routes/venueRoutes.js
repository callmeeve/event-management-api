const venueController = require("../controllers/venueController");
const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

router.get("/", venueController.getVenues);
router.get("/:id", venueController.getVenue);
router.post("/", auth.verifyToken, venueController.createVenue);
router.put("/:id", auth.verifyToken, venueController.updateVenue);
router.delete("/:id", auth.verifyToken, venueController.deleteVenue);

module.exports = router;