const sponsorController = require("../controllers/sponsorController");
const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

router.get("/", sponsorController.getSponsors);
router.get("/:id", sponsorController.getSponsor);
router.post("/", auth.verifyToken, sponsorController.createSponsor);
router.put("/:id", auth.verifyToken, sponsorController.updateSponsor);
router.delete("/:id", auth.verifyToken, sponsorController.deleteSponsor);


module.exports = router;


