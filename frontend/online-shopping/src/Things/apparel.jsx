import React, { useState, useEffect } from 'react';
import './apparel.css';
import logoImg from "./logo.png";
import { useNavigate } from "react-router-dom";
import Navv from '../Home/Navv';


function Apparel() {
  const [slideIndex, setSlideIndex] = useState(0);
  const navigate = useNavigate();

  const slideImages = [
    "https://www.ldsportnews.com/wp-content/uploads/2018/05/Uniforme-do-Bar%C3%A7a.jpg",
    "https://down-id.img.susercontent.com/file/8b911cf143d9d455bdbc3cbc85ccd2dd",
    "https://fulltimestore.in/cdn/shop/files/4b117b67.jpg?v=1746039169&width=600",
    "https://clubjerseys.in/wp-content/uploads/2024/11/6ec5adba7624ba54.webp",
  ];

  useEffect(() => {
    // Set document title
    document.title = "offside.apparels";
    
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slideImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="d1">
      <Navv/>

      <h1>APPARELS</h1>

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

      <h2>NATIONAL TEAM JERSEYS</h2>

      <div className="carousel-wrapper">
        <div className="carousel" mask="true">
          <article>
            <img src="https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/65ab78edf90a46489bcd70a8ffb4e76a_9366/Germany_25_Away_Jersey_Burgundy_JF2605_01_laydown.jpg" alt="boot1" />
            <h2>Germany 25 Away Jersey</h2>
            <div>
              <p>$500</p>
              <a href="#">View</a>
            </div>
          </article>

          <article>
            <img src="https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/c18f234fdecf4011ad2786bf129e6dfb_9366/Italy_25_Away_Jersey_Green_JF0604_01_laydown.jpg" alt="boot2" />
            <h2>Italy 25 Away Jersey</h2>
            <div>
              <p>$750</p>
              <a href="#">View</a>
            </div>
          </article>

          <article>
            <img src="https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/63a248b355b84488bc049c65b4fb9f5a_9366/Spain_24_Home_Mini_Kit_Red_IP9350_03_laydown.jpg" alt="boot3" />
            <h2>Spain 24 Home Kit</h2>
            <div>
              <p>$1000</p>
              <a href="#">View</a>
            </div>
          </article>

          <article>
            <img src="https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/44536d67ee3e42e19e90922328d6a105_9366/Argentina_24_Home_Jersey_White_IP8409_01_laydown.jpg" alt="boot4" />
            <h2>Argentina 25/26 Home Jersey</h2>
            <div>
              <p>$1200</p>
              <a href="#">View</a>
            </div>
          </article>

          <article>
            <img src="https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/15da2f188cc24818ad27d25aa75e4467_9366/Italy_24_Home_Jersey_Blue_IQ0497_01_laydown.jpg" alt="boot5" />
            <h2>Italy Home Jersey</h2>
            <div>
              <p>$2000</p>
              <a href="#">View</a>
            </div>
          </article>
        </div>
      </div>

      <h2>CLUB JERSEYS</h2>

      <div className="carousel-wrapper">
        <div className="carousel" mask="true">
          <article>
            <img src="https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/7b8f830550d9402b860615e311fa898c_9366/Arsenal_25-26_Long_Sleeve_Home_Jersey_Red_JI9536_01_laydown.jpg" alt="boot1" />
            <h2>Arsenal 25/26 Home Jersey</h2>
            <div>
              <p>$500</p>
              <a href="#">View</a>
            </div>
          </article>

          <article>
            <img src="https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/04f3367fcc874b80ada183ac69f9ca05_9366/FC_Bayern_25-26_Away_Jersey_White_JJ2143_01_laydown.jpg" alt="boot2" />
            <h2>FC Bayern 25/26 Away Jersey</h2>
            <div>
              <p>$750</p>
              <a href="#">View</a>
            </div>
          </article>

          <article>
            <img src="https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/0acec0c2c3a24bcc8a60d3deb7bccf7f_9366/Manchester_United_25-26_Long_Sleeve_Home_Jersey_Red_JP3037_01_laydown.jpg" alt="boot3" />
            <h2>Manchester United 25/26 Home Jersey</h2>
            <div>
              <p>$1000</p>
              <a href="#">View</a>
            </div>
          </article>

          <article>
            <img src="https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/cfa70dd2fd124535a7a09dc658314966_9366/Juventus_25-26_Home_Jersey_White_JJ4320_01_laydown.jpg" alt="boot4" />
            <h2>Juventus 25/26 Home Jersey</h2>
            <div>
              <p>$1200</p>
              <a href="#">View</a>
            </div>
          </article>

          <article>
            <img src="https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/dc7383e93309479384886c5fd5cdbadb_9366/Inter_Miami_CF_25-26_Messi_Away_Jersey_Kids_Black_JI6820_01_laydown.jpg" alt="boot5" />
            <h2>Inter Miami CF 25/26 Messi Away Jersey</h2>
            <div>
              <p>$2000</p>
              <a href="#">View</a>
            </div>
          </article>
        </div>
      </div>

      <h3>FOOTBALL SHIN GUARDS</h3>

      <div className="carousel" mask="true">
        <article>
          <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/004acffe-31e4-4690-aaff-d9fc1ae2c7b0/NK+MERC+HARDSHELL+-+FA22.png" alt="training1" />
          <h2>Nike Mercurial Hardshell</h2>
          <div>
            <p>$180</p>
            <a href="#">View</a>
          </div>
        </article>

        <article>
          <img src="https://www.niviasports.com/cdn/shop/files/FrontBackWhite.jpg?v=1716377548&width=600" alt="training2" />
          <h2>Nivia Wisdom-2018</h2>
          <div>
            <p>$150</p>
            <a href="#">View</a>
          </div>
        </article>

        <article>
          <img src="https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/79215dcb57d44e2893f19b3a51f5429e_9366/Tiro_Club_Shin_Guards_White_IP3995_01_standard.jpg" alt="training2" />
          <h2>Tiro Club Shin Guards</h2>
          <div>
            <p>$150</p>
            <a href="#">View</a>
          </div>
        </article>
      </div>

      <h4>FOOTBALL GOALKEEPER GLOVE</h4>

      <div className="carousel" mask="true">
        <article>
          <img src="https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/a8cc9ba94a00401aa1b33b8a4fbbc16c_9366/Predator_Training_Goalkeeper_Gloves_White_JH3806_01_00_standard.jpg" alt="training1" />
          <h2>Predator Goalkeeper Gloves</h2>
          <div>
            <p>$180</p>
            <a href="#">View</a>
          </div>
        </article>

        <article>
          <img src="https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/e110d0ef560146dabcb2120cf4271230_9366/Copa_Club_Goalkeeper_Gloves_Blue_JH3790_01_00_standard.jpg" alt="training2" />
          <h2>Copa Club Goalkeeper Gloves</h2>
          <div>
            <p>$150</p>
            <a href="#">View</a>
          </div>
        </article>

        <article>
          <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b31b044d-f7ad-4d8b-8c8e-dfd681a7d7d9/NK+GK+MATCH+-+HO24.png" alt="training2" />
          <h2>Nike Match Football Gloves</h2>
          <div>
            <p>$150</p>
            <a href="#">View</a>
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

export default Apparel;
