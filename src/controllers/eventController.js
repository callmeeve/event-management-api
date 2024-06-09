const db = require("../config/db");

exports.getEvents = async (req, res) => {
  try {
    const events = await db.event.findMany();

    res.json({ events });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

exports.getEvent = async (req, res) => {
  const { eventId } = req.params;

  try {
    const event = await db.event.findUnique({
      where: { id: eventId },
    });
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.json({ event });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

exports.createEvent = async (req, res) => {
  const { name, description, date, venueId, sponsorIds, ticketIds, userIds } =
    req.body;

  try {
    const event = await db.event.create({
      data: {
        name,
        description,
        date,
        venueId,
        sponsorIds,
        ticketIds,
        userIds,
      },
    });

    res.json({ event });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

exports.updateEvent = async (req, res) => {
  const { eventId } = req.params;
  const { name, description, date, venueId, sponsorIds, ticketIds, userIds } =
    req.body;

  try {
    const event = await db.event.update({
      where: { id: eventId },
      data: {
        name,
        description,
        date,
        venueId,
        sponsorIds,
        ticketIds,
        userIds,
      },
    });

    res.json({ event });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

exports.deleteEvent = async (req, res) => {
  const { eventId } = req.params;

  try {
    await db.event.delete({
      where: { id: eventId },
    });

    res.json({ message: "Event deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};
