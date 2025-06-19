import { useEffect, useState } from 'react';
import './Home.css';
import Jersey from "./jersey image.jpg"
import NewArrivals from "./New Arrivals.png"
import Online from "./Online shopping logo.jpg"
import ball from "./ball image.jpg"
import custom from "./Custom.jpg"
import gear from "./Football Gear.jpg"
import apparel from "./apparel.jpg"
import { Link } from 'react-router-dom';
import Footwear from '../Things/footwear.jsx';
import Apparel from '../Things/apparel.jsx';
import Football from '../Things/football.jsx';


function Home() {
  const [slideIndex, setSlideIndex] = useState(0);

  const images = [
    NewArrivals,
    Jersey,
    "https://c4.wallpaperflare.com/wallpaper/306/63/720/nike-shoes-sneakers-blue-wallpaper-preview.jpg",
    ball
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="top">
        <div className='Logo'>
          <img src={Online} width="50" height="50" alt="logo" />
          <h2>𝓞𝓕𝓕𝓢𝓘𝓓𝓔 𝓓𝓔𝓐𝓛𝓢</h2>
        </div>
        <div className="search-bar">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ3OkEP3lTuFSSRzACTAZIV_UxId5pxZZBGQ&s" width="30" height="30" alt="search-logo" />
          <input type="text" placeholder="Search....." />
        </div>
        <div className="button-link">
          <div className='login'><Link to='/Login'>Login</Link></div>
          <div className='cart'><Link to='#'>Cart</Link></div>
        </div>
      </div>

      <div className="slideshow">
        {images.map((src, index) => (
          <div
            key={index}
            className="Slides fade"
            style={{ opacity: index === slideIndex ? 1 : 0 }}
          >
            <img src={src} alt={`pic${index + 1}`} />
          </div>
        ))}
      </div>

      
      <div className="things">
        <div className='footweart'>
          <Link to='/Footwear'>
          <img src='https://5.imimg.com/data5/SELLER/Default/2024/2/391075156/GS/YS/JM/115368345/football-shoes-for-players.jpg ' width="150" height="150"/>
          <br></br>
          Footwear
          <p>20% off</p>
          </Link>
        </div>
        <div className='apparelt'>
          <Link to="/Apparel">
          <img src={apparel} width="150" height="150"/>
          <br></br>
          Apparel
          <p>50% off</p>
          </Link>
        </div>
        <div className='geart'>
          <Link to="/Football">
          <img src={gear} width="150" height="150"/>
          <br></br>
          Football Gear
          <p>30% off</p>
          </Link>
        </div>
        
        <div className='collect'>
          <img src='https://www.shutterstock.com/image-photo/football-trophy-collection-260nw-1271086963.jpg' width="150" height="150"/>
          <br></br>
          <a href='#'>Seasonal Collections</a>
          <p>70% off</p>
        </div>
        <div className='custom'>
          <img src={custom} width="150" height="150"/>
          <br></br>
          <Link to='/Custom'>Customisation</Link>
          <p>20% off</p>
        </div>
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
    </>
  );
}

export default Home;
