import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home/Home.jsx'
import Login from './Login/Login.jsx';
import Signup from './Signup/Signup.jsx';
import Footwear from './Things/footwear.jsx';
import Apparel from './Things/apparel.jsx';
import Football from './Things/football.jsx';
import Custom from './Things/custom.jsx';


import Homee from './Cart/Cart_home.jsx';
import Checkout from './Cart/components/Checkout.jsx';
import Success from './Cart/components/success.jsx';
import Cart from './Cart/components/cart_item.jsx';
import BuyNowCheckout from './Cart/components/BuyNowCheckout.jsx';
import { useState } from 'react';




function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Footwear" element={<Footwear />} />
        
        <Route path="/Apparel" element={<Apparel />} />
        <Route path="/Football" element={<Football />} />
        <Route path="/Custom" element={<Custom />} />
        <Route path="/Signup" element={<Signup />} />

        <Route path="/HomeCart/:id" element={<Homee addToCart={addToCart}/>}/>
        <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}/>
        <Route path="/BCheckout" element={<BuyNowCheckout/>}  />

      </Routes>
      </BrowserRouter>
    
  );
}

export default App;