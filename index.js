const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const authRoutes = require("./src/routes/authRoutes");
const eventRoutes = require("./src/routes/eventRoutes");
const sponsorRoutes = require("./src/routes/sponsorRoutes");
const ticketRoutes = require("./src/routes/ticketRoutes");
const userRoutes = require("./src/routes/userRoutes");
const venueRoutes = require("./src/routes/venueRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/auth", authRoutes);
app.use("/api/event", eventRoutes);
app.use("/api/sponsor", sponsorRoutes);
app.use("/api/ticket", ticketRoutes);
app.use("/api/profile", userRoutes);
app.use("/api/venue", venueRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Event Management API");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
