const db = require("../config/db");

exports.getSponsors = async (req, res) => {
  try {
    const sponsors = await db.sponsor.findMany();
    res.json({ sponsors });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

exports.getSponsor = async (req, res) => {
  const { sponsorId } = req.params;
  try {
    const sponsor = await db.sponsor.findUnique({
      where: { id: sponsorId },
    });
    if (!sponsor) {
      return res.status(404).json({ error: "Sponsor not found" });
    }
    res.json({ sponsor });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

exports.createSponsor = async (req, res) => {
  const { name, eventIds } = req.body;
  try {
    const sponsor = await db.sponsor.create({
      data: {
        name,
        eventIds,
      },
    });
    res.json({ sponsor });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

exports.updateSponsor = async (req, res) => {
  const { sponsorId } = req.params;
  const { name, eventIds } = req.body;
  try {
    const sponsor = await db.sponsor.update({
      where: { id: sponsorId },
      data: {
        name,
        eventIds,
      },
    });
    res.json({ sponsor });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

exports.deleteSponsor = async (req, res) => {
  const { sponsorId } = req.params;
  try {
    await db.sponsor.delete({
      where: { id: sponsorId },
    });
    res.json({ message: "Sponsor deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};
