const db = require("../config/db");

exports.getVenues = async (req, res) => {
  try {
    const venues = await db.venue.findMany();

    res.json({ venues });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

exports.getVenue = async (req, res) => {
  const { venueId } = req.params;

  try {
    const venue = await db.venue.findUnique({
      where: { id: venueId },
    });
    if (!venue) {
      return res.status(404).json({ error: "Venue not found" });
    }

    res.json({ venue });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

exports.createVenue = async (req, res) => {
  const { name, address, eventIds } = req.body;

  try {
    const venue = await db.venue.create({
      data: {
        name,
        address,
        eventIds,
      },
    });

    res.json({ venue });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

exports.updateVenue = async (req, res) => {
  const { venueId } = req.params;
  const { name, address, eventIds } = req.body;

  try {
    const venue = await db.venue.update({
      where: { id: venueId },
      data: {
        name,
        address,
        eventIds,
      },
    });

    res.json({ venue });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

exports.deleteVenue = async (req, res) => {
  const { venueId } = req.params;

  try {
    const venue = await db.venue.delete({
      where: { id: venueId },
    });

    res.json({ venue });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};
