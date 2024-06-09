const express = require("express");
const router = express.Router();

const authRoutes = require("../authRoutes");
const userRoutes = require("../userRoutes");
const eventRoutes = require("../eventRoutes");
const sponsorRoutes = require("../sponsorRoutes");
const venueRoutes = require("../venueRoutes");
const ticketRoutes = require("../ticketRoutes");

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/event", eventRoutes);
router.use("/sponsor", sponsorRoutes);
router.use("/venue", venueRoutes);
router.use("/ticket", ticketRoutes);

module.exports = router;