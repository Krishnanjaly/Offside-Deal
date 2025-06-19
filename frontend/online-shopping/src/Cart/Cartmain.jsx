import React from "react";
import Item_desc from "./item_desc"; // Your custom component
import jerseyImage from "./i1.png";
import thumb1 from "./i2.png";
import thumb2 from "./i3.png";
import { useNavigate } from "react-router-dom";

function Cartmain() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/Home");
  };

  const itemDetails = {
    title: "Teky Argentina Football Jersey 2025",
    rating: "★★★★☆ (200 reviews)",
    badge: "Bestseller",
    price: "₹3,299",
    discount: "-20%",
    stockStatus: "In Stock ✅",
    mainImage: jerseyImage,
    thumbnails: [jerseyImage, thumb1, thumb2],
    highlights: [
      "Official 2025 Jersey",
      "Machine Washable",
      "Breathable fabric",
    ],
    description:
      "Detailed description about the football jersey material, fit, care instructions, and more.",
    offers: "Free delivery for orders above ₹999",
  };

  return (
    <div style={{ padding: "20px" }}>
      <button
        onClick={handleBack}
        style={{
          padding: "8px 16px",
          marginBottom: "20px",
          backgroundColor: "#1E4CFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        ⬅ Go to Home
      </button>
      <Item_desc item={itemDetails} />
    </div>
  );
}

export default Cartmain;
