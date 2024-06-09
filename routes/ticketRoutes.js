const ticketController = require("../controllers/ticketController");
const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

router.get("/", ticketController.getTickets);
router.get("/:id", ticketController.getTicket);
router.post("/", auth.verifyToken, ticketController.createTicket);
router.put("/:id", auth.verifyToken, ticketController.updateTicket);
router.delete("/:id", auth.verifyToken, ticketController.deleteTicket);


module.exports = router;


