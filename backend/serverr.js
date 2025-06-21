const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("Mongo Error", err));

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



// POST route to add a football item
app.post("/api/footballs/:id", async (req, res) => {
  try {
    const newItem = new FootballItem({
      title: req.body.title,
      rating: req.body.rating,
      badge: req.body.badge,
      price: req.body.price,
      discount: req.body.discount,
      stockStatus: req.body.stockStatus,
      mainImage: req.body.mainImage,
      thumbnails: req.body.thumbnails,
      highlights: req.body.highlights,
      description: req.body.description,
      offers: req.body.offers,
    });

    const savedItem = await newItem.save();
    res.status(201).json(savedItem);

  } catch (error) {
    console.error("❌ Error adding item:", error);
    res.status(500).json({ message: "Failed to add football item" });
  }
});


const port = 5000;
app.listen(port, () => {
  console.log(`⚽ Server running at http://localhost:${port}`);
});
