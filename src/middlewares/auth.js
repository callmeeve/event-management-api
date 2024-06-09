const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "No authorization header provided" });
  }

  const token = req.headers.authorization.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    if (!decoded.userId) {
      throw new Error("Invalid token");
    }

    req.userData = { userId: decoded.userId };
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Authentication failed" });
  }
};