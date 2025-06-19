import React, { useEffect } from 'react';
import './Apparel.css'; // Assuming you have a CSS file
import Home from "../Home/Home.jsx"
import logo from "./logo.png"

function Apparel() {

  useEffect(() => {
    let slideIndex = 0;
    const showSlides = () => {
      const slides = document.getElementsByClassName("mySlides");
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1; }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 2000);
    };
    showSlides();
  }, []);

  return (
    <>
      <div id="d1">
        <div id="d2">
          <img id="logo" src={logo} width="150px" alt="Logo" />
          <button onClick={() => window.location.href = '/Home'}>HOME</button>
        </div>

        <h1>APPARELS</h1>

        {/* Slideshow */}
        <div className="slideshow-container">
          <div className="mySlides">
            <img src="https://www.ldsportnews.com/wp-content/uploads/2018/05/Uniforme-do-Bar%C3%A7a.jpg" alt="slide1" />
          </div>
          <div className="mySlides">
            <img src="https://down-id.img.susercontent.com/file/8b911cf143d9d455bdbc3cbc85ccd2dd" alt="slide2" />
          </div>
          <div className="mySlides">
            <img src="https://fulltimestore.in/cdn/shop/files/4b117b67.jpg?v=1746039169&width=600" alt="slide3" />
          </div>
          <div className="mySlides">
            <img src="https://clubjerseys.in/wp-content/uploads/2024/11/6ec5adba7624ba54.webp" alt="slide4" />
          </div>
        </div>

        {/* NATIONAL TEAM JERSEYS */}
        <h2>NATIONAL TEAM JERSEYS</h2>
        <div className="carousel-wrapper">
          <div className="carousel" mask="true">
            {/* Repeatable Jersey Items */}
            <JerseyCard 
              title="Germany 25 Away Jersey"
              price="$500"
              image="https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/65ab78edf90a46489bcd70a8ffb4e76a_9366/Germany_25_Away_Jersey_Burgundy_JF2605_01_laydown.jpg"
            />
            {/* Add more <JerseyCard /> components as needed */}
          </div>
        </div>

        {/* Add CLUB JERSEYS, SHIN GUARDS, GLOVES same as above... */}

        {/* Footer */}
        <div className="bottom">
          <footer className="down">
            &copy;offdeals.ac.in
            <div className="logos">
              <a href="https://www.instagram.com">
                <img className="insta" src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-icon-Logo-2016-present.png" width="30px" height="20px" alt="Instagram" />
              </a>
              <a href="https://www.facebook.com">
                <img className="face" src="https://freelogopng.com/images/all_img/1657548367Facebook-logo.png" width="30px" height="25px" alt="Facebook" />
              </a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

function JerseyCard({ title, price, image }) {
  return (
    <article>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <div>
        <p>{price}</p>
        <a href="#">View</a>
      </div>
    </article>
  );
}

export default Apparel;
