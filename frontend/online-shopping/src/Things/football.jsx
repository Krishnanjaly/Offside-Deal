import React, { useEffect, useState } from "react";
import "./football.css";
import logoImg from "./logo.png";
import { Link } from "react-router-dom";

function Football() {
  const [slideIndex, setSlideIndex] = useState(0);

  const slideImages = [
    "https://res.cloudinary.com/confirmed-web/image/upload/c_lfill,w_800,h_900,c_fill/v1710404021/adidas-group/I3S/stories/images/adidas-world-cup-football-history-archive-gameplana-Telstar18_1-scaled-1440x9999_w1a0q7.jpg",
    "https://i.pinimg.com/736x/10/ff/ca/10ffca04c6577f29157bcd467c74ff4e.jpg",
    "https://www.soccerbible.com/media/95113/fb-ucl-19-20-ball.jpg",
    "https://i.ebayimg.com/images/g/5woAAOSwM3Bk-hdA/s-l1200.jpg",
  ];

  useEffect(() => {
    // Set document title
    document.title = "offside.footballs";
    
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [slideImages.length]);

  return (
    <div id="d1">
      <div id="d2">
        <img id="logo" src={logoImg} alt="logo" width="150px" />
        <button onClick={() => window.location.href = "#"}>HOME</button>
      </div>

      <h1>FOOTBALLS</h1>

      <div className="slideshow-container">
        {slideImages.map((url, index) => (
          <div
            className="mySlides"
            key={index}
            style={{ display: index === slideIndex ? "block" : "none" }}
          >
            <img src={url} alt={`slide-${index}`} />
          </div>
        ))}
      </div>

      {/* CAROUSEL BLOCKS */}
      {[
        [
          {
            img: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/5a7162e19bb649108e5c9b9288254d97_9366/UEFA_Champions_League_Training_24-25_Knockout_Phase_Ball_White_JH1281_01_00_standard.jpg",
            title: "UEFA Champions League Training 24/25 Knockout Phase Ball",
            price: "$500"
          },
          {
            img: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/7bac29e19bd743ff8a9c4af89efc654b_9366/Messi_Club_Ball_Multicolor_JG3873_01_standard.jpg",
            title: "Messi Club Ball",
            price: "$750"
          },
          {
            img: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3720404642a74387ac329b8c0d1d7fb0_9366/Fussballliebe_Finale_League_Ball_Silver_IX4046_01_standard.jpg",
            title: "Fussballliebe Finale League Ball",
            price: "$1000"
          },
          {
            img: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/8b0e103aeb424a14abd322273977f052_9366/Mundial_de_Clubes_FIFA_25_League_Ball_White_JD3824_01_00_standard.jpg",
            title: "Mundial de Clubes FIFA 25 League Ball",
            price: "$1200"
          },
          {
            img: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/5472f795f5774ecaa878af2e007f0e77_9366/Tiro_League_Thermally_Bonded_Ball_White_HZ1294_01_00_standard.jpg",
            title: "Tiro League Thermally Bonded Ball",
            price: "$2000"
          }
        ],
        [
          {
            img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/084699/01/fnd/IND/fmt/png/Orbita-Ultimate-PL-Brilliance-Premier-League-Match-Ball-(FIFA%C2%AE-Quality-Pro)",
            title: "Premier League Match Ball",
            price: "$500"
          },
          {
            img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/054760/06/fnd/IND/fmt/png/Future-2-Football",
            title: "Future 2 Football",
            price: "$750"
          },
          {
            img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/083765/02/fnd/IND/fmt/png/Futsal-3-MS-Football",
            title: "Futsal 3 MS Football",
            price: "$1000"
          },
          {
            img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/084073/10/fnd/IND/fmt/png/ATTACANTO-Football",
            title: "ATTACANTO Football",
            price: "$1200"
          },
          {
            img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/084347/01/fnd/IND/fmt/png/FINAL-Graphic-Football",
            title: "FINAL Graphic Football",
            price: "$2000"
          }
        ],
        [
          {
            img: "https://www.niviasports.com/cdn/shop/files/1_b1167e39-eec4-4141-903e-85d6c941a362.jpg?v=1724335687&width=600",
            title: "NIVIA SHASTRA 2.0",
            price: "$500"
          },
          {
            img: "https://cdn.shopify.com/s/files/1/0555/8235/9665/files/1360-AR-2.jpg?v=1709636362&width=500",
            title: "NIVIA COUNTRY COLOR",
            price: "$750"
          },
          {
            img: "https://www.niviasports.com/cdn/shop/files/80075LO_20_1.jpg?v=1720168256&width=600",
            title: "NIVIA RABONA PRO",
            price: "$1000"
          },
          {
            img: "https://www.niviasports.com/cdn/shop/files/2B0A0524.jpg?v=1715332850&width=600",
            title: "NIVIA STREET",
            price: "$1200"
          },
          {
            img: "https://www.niviasports.com/cdn/shop/files/New-Astra-32-Cyan-3.jpg?v=1714132414&width=600",
            title: "NIVIA ASTRA-32",
            price: "$2000"
          }
        ]
      ].map((set, index) => (
        <div className="carousel-wrapper" key={index}>
          <div className="carousel" mask="true">
            {set.map((item, idx) => (
              <article key={idx}>
                <img src={item.img} alt={`boot${idx + 1}`} />
                <h2>{item.title}</h2>
                <div>
                  <p>{item.price}</p>
                  <Link to="/Cartmain">View</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}

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

export default Football;
