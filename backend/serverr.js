const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("Mongo Error", err));

// User Model
const User = require("./models/User");

// Football Item Schema and Model
const FootballSchema = new mongoose.Schema({
  title: String,
  price: String,
  mainImage: String,
  rating: String,
  badge: String,
  discount: String,
  stockStatus: String,
  thumbnails: [String],
  highlights: [String],
  description: String,
  offers: String
});
const FootballItem = mongoose.model("FootballItem", FootballSchema);

// ====================== USER ROUTES ======================

// Registration Route
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();
    res.json({ message: "Registration successful ✅" });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Login Route
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    res.json({ message: "Login successful ✅", user });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// ====================== FOOTBALL ITEM ROUTES ======================

// Get a football item by ID
app.get("/api/footballs/:id", async (req, res) => {
  try {
    const item = await FootballItem.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json(item);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

// Add a new football item
app.post("/api/footballs", async (req, res) => {
  try {
    const newItem = new FootballItem(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    console.error("❌ Error adding item:", error);
    res.status(500).json({ message: "Failed to add football item" });
  }
});

// ====================== SERVER LISTEN ======================

const port = 5000;
app.listen(port, () => {
  console.log(`⚽ Server running at http://localhost:${port}`);
});
