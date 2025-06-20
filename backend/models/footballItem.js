const mongoose = require("mongoose");

const footballItemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: String, required: true },
    mainImage: { type: String, required: true },
    thumbnails: [{ type: String }],      // array of image URLs
    description: { type: String },
    discount: { type: String },
    stockStatus: { type: String },
    rating: { type: String },
    badge: { type: String },
    offers: { type: String },
    highlights: [{ type: String }]       // array of feature strings
  },
  { timestamps: true }
);



const FootballItem = mongoose.model("FootballItem", footballItemSchema);

module.exports = FootballItem;
