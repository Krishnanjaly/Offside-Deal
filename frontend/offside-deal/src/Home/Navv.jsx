import { Link } from 'react-router-dom';
import Online from "./Online shopping logo.jpg"
import React, { useState } from 'react'
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

const Navv = () => {
  const [searchText, setSearchText] = useState("");

  

  
  const [myOptions, setMyOptions] = useState([])

  const getDataFromAPI = () => {
    console.log("Options Fetched from API")

    fetch('http://localhost:5000/api/football')
  .then((response) => response.json())
  .then((res) => {
    const options = res.data.map(item => item.title);
    setMyOptions(options);
  });

  }
  return (
    <div className="top">
      <div className='Logo'>
        <img src={Online} width="50" height="50" alt="logo" />
        <h2>𝓞𝓕𝓕𝓢𝓘𝓓𝓔 𝓓𝓔𝓐𝓛𝓢</h2>
      </div>
      <div className="search-bar">
          <Autocomplete
            style={{ width: 350 }}
            freeSolo
            autoComplete
            autoHighlight
            options={myOptions}
            renderInput={(params) => (
              <TextField
                {...params}
                 type="text"
                  value={searchText}
        
                onChange={getDataFromAPI }
                variant="outlined"
                placeholder="Search..."
                sx={{
                  input: { color: 'white' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'white' },
                    '&:hover fieldset': { borderColor: 'lightblue' },
                    '&.Mui-focused fieldset': { borderColor: 'lightblue' }
                  },
                  '& .MuiInputBase-input::placeholder': {
                    color: 'gray',
                  }
                }}
              />
            )}
          />
       <button
          className="search-button"
          onClick={() => {
            
            alert(`Searching for: item`);
          }}
        >
        <FaSearch />
      </button>
      </div>
      <div className="button-link">
        <div className='login'><FaUser  color='#00cfff' size={25}/><Link to='/Login'>Login</Link></div>
        <div className='cart'><FaCartShopping  color='#00cfff' size={25}/><Link to='/cart'>Cart</Link></div>
        <div className='Home'><FaHome  color='#00cfff' size={25}/><Link to='/Home'>Home</Link></div>
      </div>
    </div>
  )
}

export default Navv;
