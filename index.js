const express = require("express");
const cors = require("cors");
const { config } = require("dotenv");
const app = express();
config();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./routes/api"));

app.get("/", (req, res) => {
  res.send("Welcome to Event Management API");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
