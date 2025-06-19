import React, { useEffect, useState } from 'react';
import logo from './logo.png'; // Adjust path as per your project structure
import Home from '../Home/Home.jsx'

function Football() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % 4); // You have 4 slides
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="d1">
      <div id="d2">
        <img id="logo" src={logo} width="150px" alt="Logo" />
        <button onClick={() => window.location.href = "/Home"}>HOME</button>
      </div>

      <h1>FOOTBALLS</h1>

      <div className="slideshow-container">
        {[
          "https://res.cloudinary.com/confirmed-web/image/upload/c_lfill,w_800,h_900,c_fill/v1710404021/adidas-group/I3S/stories/images/adidas-world-cup-football-history-archive-gameplana-Telstar18_1-scaled-1440x9999_w1a0q7.jpg",
          "https://i.pinimg.com/736x/10/ff/ca/10ffca04c6577f29157bcd467c74ff4e.jpg",
          "https://www.soccerbible.com/media/95113/fb-ucl-19-20-ball.jpg",
          "https://i.ebayimg.com/images/g/5woAAOSwM3Bk-hdA/s-l1200.jpg"
        ].map((url, idx) => (
          <div
            className="mySlides"
            key={idx}
            style={{ display: idx === slideIndex ? "block" : "none" }}
          >
            <img src={url} alt={`slide-${idx}`} />
          </div>
        ))}
      </div>

      {/* Repeat your carousels here - all "class" changed to "className" */}
      {/* ...Your carousel wrappers... */}

      <div className="bottom">
        <footer className="down">
          &copy; offdeals.ac.in
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

export default Football;
