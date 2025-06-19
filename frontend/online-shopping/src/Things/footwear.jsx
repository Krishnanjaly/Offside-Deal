import React, { useState, useEffect } from "react";
import "./footwear.css"; 
import Home from "../Home/Home.jsx"
import logo from "./logo.png"

function Footwear() {
  const [slideIndex, setSlideIndex] = useState(0);

  const slideImages = [
    "https://static.dezeen.com/uploads/2024/07/f50-adidas-football-super-shoe_dezeen_2364_sq_4.jpg",
    "https://media.istockphoto.com/id/1303978937/photo/white-sneaker-on-a-blue-gradient-background-mens-fashion-sport-shoe-sneakers-lifestyle.jpg?s=612x612&w=0&k=20&c=L725fuzFTnm6qEaqE7Urc5q6IR80EgYQEjBn_qtBIQg=",
    "https://www.footballboots.co.uk/wp-content/uploads/2024/06/adidas-advancement-1.jpg",
    "https://i.pinimg.com/736x/20/74/32/207432b67c2bfa646233465501e6e844.jpg",
    "https://sudu.co.uk/cdn/shop/files/Blue-boots.jpg?v=1738624766&width=858",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slideImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="d1">
      <div id="d2">
        <img id="logo" src={logo} alt="logo" width="150px" />
        <button onClick={() => window.location.href = "/Home"}>HOME</button>
      </div>

      <h1>FOOTWEAR</h1>

      <div className="slideshow-container">
        {slideImages.map((src, index) => (
          <div
            className="mySlides"
            key={index}
            style={{ display: slideIndex === index ? "block" : "none" }}
          >
            <img src={src} alt={`slide-${index}`} />
          </div>
        ))}
      </div>

      <h2>FOOTBALL BOOTS</h2>

      {/* First Carousel (Football Boots) */}
      <div className="carousel-wrapper">
        <div className="carousel">
          {/* Repeat this article block with different data */}
          <article>
            <img src="https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/f05893320d6643d8b2d27a611cff4f1b_9366/Predator_League_Fold-Over_Tongue_Firm-Multi-Ground_Boots_White_JP5737_01_00_standard_hover.jpg" alt="boot1" />
            <h2>Predator League Fold-Over Tongue Firm/Multi-Ground Boots</h2>
            <div>
              <p>$500</p>
              <a href="#">View</a>
            </div>
          </article>
          {/* Add other boots here... */}
        </div>
      </div>

      {/* Second Carousel (Nivia Training Shoes) */}
      <div className="carousel">
        {/* Nivia Shoes articles go here */}
      </div>

      <h3>TRAINING SHOES</h3>

      {/* Third Carousel (Adidas and Nike Training Shoes) */}
      <div className="carousel">
        {/* Adidas/Nike Shoes articles go here */}
      </div>

      <div className="bottom">
        <footer className="down">
          &copy;offdeals.ac.in
          <div className="logos">
            <a href="https://www.instagram.com">
              <img
                className="insta"
                src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-icon-Logo-2016-present.png"
                width="30px"
                height="20px"
                alt="insta-log"
              />
            </a>
            <a href="https://www.facebook.com">
              <img
                className="face"
                src="https://freelogopng.com/images/all_img/1657548367Facebook-logo.png"
                width="30px"
                height="25px"
                alt="facebook-logo"
              />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footwear;
