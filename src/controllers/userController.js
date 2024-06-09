const db = require("../config/db");

exports.getUser = async (req, res) => {
  const { userId } = req.userData;

  try {
    const user = await db.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

exports.updateUser = async (req, res) => {
  const { userId } = req.userData;
  const { name, email } = req.body;

  try {
    const user = await db.user.update({
      where: { id: userId },
      data: { name, email },
    });

    res.json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

exports.deleteUser = async (req, res) => {
  const { userId } = req.userData;

  try {
    await db.user.delete({
      where: { id: userId },
    });

    res.json({ message: "User deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};