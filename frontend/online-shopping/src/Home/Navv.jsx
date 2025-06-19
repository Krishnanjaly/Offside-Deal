import { Link } from 'react-router-dom';
import Online from "./Online shopping logo.jpg"

function Navv() {
  return (
    <div className="top">
      <div className='Logo'>
        <img src={Online} width="50" height="50" alt="logo" />
        <h2>𝓞𝓕𝓕𝓢𝓘𝓓𝓔 𝓓𝓔𝓐𝓛𝓢</h2>
      </div>
      <div className="search-bar">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ3OkEP3lTuFSSRzACTAZIV_UxId5pxZZBGQ&s"
          width="30"
          height="30"
          alt="search-logo" />
        <input type="text" placeholder="Search....." />
      </div>
      <div className="button-link">
        <div className='login'><Link to='/Login'>Login</Link></div>
        <div className='cart'><Link to='/cart'>Cart</Link></div>
        <div className='Home'><Link to='/Home'>Home</Link></div>
      </div>
    </div>
  )
}

export default Navv;
