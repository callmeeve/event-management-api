const db = require("../config/db");

exports.getTickets = async (req, res) => {
  try {
    const tickets = await db.ticket.findMany();
    res.json({ tickets });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

exports.getTicket = async (req, res) => {
  const { ticketId } = req.params;
  try {
    const ticket = await db.ticket.findUnique({
      where: { id: ticketId },
    });
    if (!ticket) {
      return res.status(404).json({ error: "Ticket not found" });
    }
    res.json({ ticket });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

exports.createTicket = async (req, res) => {
  const { name, price, eventId, userIds } = req.body;
  try {
    const ticket = await db.ticket.create({
      data: {
        name,
        price,
        eventId,
        userIds,
      },
    });
    res.json({ ticket });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

exports.updateTicket = async (req, res) => {
  const { ticketId } = req.params;
  const { name, price, eventId, userIds } = req.body;
  try {
    const ticket = await db.ticket.update({
      where: { id: ticketId },
      data: {
        name,
        price,
        eventId,
        userIds,
      },
    });
    res.json({ ticket });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

exports.deleteTicket = async (req, res) => {
  const { ticketId } = req.params;
  try {
    await db.ticket.delete({
      where: { id: ticketId },
    });
    res.json({ message: "Ticket deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};
