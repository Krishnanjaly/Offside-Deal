// src/Footwear.jsx

import React, { useState, useEffect } from "react";
import "./Footwear.css";
import logoImg from "./logo.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Footwear() {
  const [slideIndex, setSlideIndex] = useState(0);
  const navigate = useNavigate();


  const slideImages = [
    "https://static.dezeen.com/uploads/2024/07/f50-adidas-football-super-shoe_dezeen_2364_sq_4.jpg",
    "https://media.istockphoto.com/id/1303978937/photo/white-sneaker-on-a-blue-gradient-background-mens-fashion-sport-shoe-sneakers-lifestyle.jpg?s=612x612&w=0&k=20&c=L725fuzFTnm6qEaqE7Urc5q6IR80EgYQEjBn_qtBIQg=",
    "https://www.footballboots.co.uk/wp-content/uploads/2024/06/adidas-advancement-1.jpg",
    "https://i.pinimg.com/736x/20/74/32/207432b67c2bfa646233465501e6e844.jpg",
    "https://sudu.co.uk/cdn/shop/files/Blue-boots.jpg?v=1738624766&width=858",
  ];

  useEffect(() => {
    // Set document title
    document.title = "offside.footwear";
    
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slideImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="d1">
      <div id="d2">
        <img id="logo" src={logoImg} alt="logo" width="150px" />
        <button onClick={() => navigate("/Home")}>HOME</button>

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

      <div className="carousel-wrapper">
        <div className="carousel" mask="true">
          <article>
            <img src="https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/f05893320d6643d8b2d27a611cff4f1b_9366/Predator_League_Fold-Over_Tongue_Firm-Multi-Ground_Boots_White_JP5737_01_00_standard_hover.jpg" alt="boot1" />
            <h2>Predator League Fold-Over Tongue Firm/Multi-Ground Boots</h2>
            <div>
              <p>$500</p>
              <Link to="/ApppCart">View</Link>
            </div>
          </article>

          <article>
            <img src="https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/712b3d2f205b4ea38beac41ace825b51_9366/Messi_F50_Club_Flexible_Ground_Boots_Kids_Gold_IG9319_01_standard_hover.jpg" alt="boot2" />
            <h2>Messi F50 Club Flexible Ground Boots Kids</h2>
            <div>
              <p>$750</p>
              <Link to="/ApppCart">View</Link>
            </div>
          </article>

          <article>
            <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4499d2dc-556a-4538-bb74-b573b0e72d99/ZM+VAPOR+16+ELITE+FG+VJR.png" alt="boot3" />
            <h2>Nike Mercurial Vapor 16 Elite 'Vini Jr</h2>
            <div>
              <p>$1000</p>
              <Link to="/ApppCart">View</Link>
            </div>
          </article>

          <article>
            <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7a167e7c-08a8-4e76-aa6e-ed80eada8926/MERCURIAL+VAPOR+1+RGN+SE+FG.png" alt="boot4" />
            <h2>Nike Mercurial Vapor 1 RGN SE</h2>
            <div>
              <p>$1200</p>
              <Link to="/ApppCart">View</Link>
            </div>
          </article>

          <article>
            <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/65a4b74e-55f9-4744-ac62-3911dbdcb79c/LEGEND+10+ACADEMY+TF.png" alt="boot5" />
            <h2>Nike Tiempo Legend 10 Academy</h2>
            <div>
              <p>$2000</p>
              <Link to="/ApppCart">View</Link>
            </div>
          </article>
        </div>
      </div>

      <div className="carousel" mask="true">
        <article>
          <img src="https://www.niviasports.com/cdn/shop/files/FB-1415GRSafariWhite2.jpg?v=1722995906&width=600" alt="training1" />
          <h2>Safari Men's Football Shoes</h2>
          <div>
            <p>$180</p>
            <Link to="/ApppCart">View</Link>
          </div>
        </article>

        <article>
          <img src="https://www.niviasports.com/cdn/shop/files/Dagger_Blue_2_84416a08-5819-4d81-a655-eeea93a310ba.jpg?v=1719398792&width=600" alt="training2" />
          <h2>Nivia Dagger Men's Football Studs</h2>
          <div>
            <p>$150</p>
            <Link to="/ApppCart">View</Link>
          </div>
        </article>

        <article>
          <img src="https://www.niviasports.com/cdn/shop/files/FB-3943BKAshtang2.02_b3b7700a-ed7c-4ccc-9680-1a6af4cface3.jpg?v=1734003334&width=600" alt="training3" />
          <h2>Ashtang 2.0 Football Studs</h2>
          <div>
            <p>$160</p>
            <Link to="/ApppCart">View</Link>
          </div>
        </article>

        <article>
          <img src="https://www.niviasports.com/cdn/shop/files/FB-1417WBIgnite2.jpg?v=1720524833&width=600" alt="training4" />
          <h2>Nivia Ignite Adult Football Studs</h2>
          <div>
            <p>$90</p>
            <Link to="/ApppCart">View</Link>
          </div>
        </article>

        <article>
          <img src="https://www.niviasports.com/cdn/shop/files/77A8799.jpg?v=1745569271&width=600" alt="training5" />
          <h2>Encounter Pro 11</h2>
          <div>
            <p>$140</p>
            <Link to="/ApppCart">View</Link>
          </div>
        </article>
      </div>

      <h3>TRAINING SHOES</h3>

      <div className="carousel" mask="true">
        <article>
          <img src="https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/260db5cc7fd349249a1003d2a1e1d507_9366/Cloudfoam_Move_Sock_Shoes_Grey_ID6522_01_standard.jpg" alt="training1" />
          <h2>Cloudfoam Move Sock Shoes</h2>
          <div>
            <p>$180</p>
            <Link to="/ApppCart">View</Link>
          </div>
        </article>

        <article>
          <img src="https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/311c3eb3270e4fb38e33f5a45a408cf0_9366/Ultraboost_1.0_Shoes_Beige_JQ2270_01_00_standard.jpg" alt="training2" />
          <h2>Ultraboost 1.0 Shoes</h2>
          <div>
            <p>$150</p>
            <Link to="/ApppCart">View</Link>
          </div>
        </article>

        <article>
          <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/436131d5670b4b6081f3680f42d297cc_9366/Grand_Court_Base_2.0_Shoes_White_JH8611_01_00_standard.jpg" alt="training3" />
          <h2>Barreda Decode Shoes</h2>
          <div>
            <p>$160</p>
            <Link to="/ApppCart">View</Link>
          </div>
        </article>

        <article>
          <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e6481d7c-1e66-4d2f-9e30-3af64a37c157/W+NIKE+FREE+METCON+6.png" alt="training4" />
          <h2>Nike Free Metcon 6</h2>
          <div>
            <p>$90</p>
            <Link to="/ApppCart">View</Link>
          </div>
        </article>

        <article>
          <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1d76cc6e-94fc-4168-bb50-33432bb9f02c/FLEX+EXPERIENCE+RN+12.png" alt="training5" />
          <h2>Nike Flex Experience Run 12</h2>
          <div>
            <p>$140</p>
            <Link to="/ApppCart">View</Link>
          </div>
        </article>
      </div>

      <div className="bottom">
        <footer className="down">
          &copy;offdeals.ac.in
          <div className="logos">
            <a href="https://www.instagram.com">
              <img className="insta" src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-icon-Logo-2016-present.png" width="30px" height="20px" alt="insta-log" />
            </a>
            <a href="https://www.facebook.com">
              <img className="face" src="https://freelogopng.com/images/all_img/1657548367Facebook-logo.png" width="30px" height="25px" alt="facebook-logo" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footwear;
