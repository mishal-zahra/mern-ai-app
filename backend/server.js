require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const queryRoutes = require("./routes/queryRoutes");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

// Health Check Route
app.get("/api/health", (req, res) => {
  res.json({ status: "OK" });
});
app.use("/api/auth", authRoutes);
app.use("/api/query", queryRoutes);

app.listen(5001, () => console.log("Server running on port 5001"));
