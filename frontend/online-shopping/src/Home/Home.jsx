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
import Navv from './Navv.jsx';
import Footer from './footer.jsx';


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
      <Navv/>

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
          <Link to='/Custom'>
          <img src='https://www.shutterstock.com/image-photo/football-trophy-collection-260nw-1271086963.jpg' width="150" height="150"/>
          <br></br>
          Seasonal Collections
          <p>70% off</p>
          </Link>
        </div>
        <div className='custom'>
          <Link to='/Custom'>
          <img src={custom} width="150" height="150"/>
          <br></br>
          Customisation
          <p>20% off</p>
          </Link>
        </div>
      </div>

        <Footer/>
      
    </>
  );
}

export default Home;
