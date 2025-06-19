import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home/Home.jsx'
import Login from './Login/Login.jsx';
import Signup from './Signup/Signup.jsx';
import Footwear from './Things/footwear.jsx';
import Apparel from './Things/apparel.jsx';
import Football from './Things/football.jsx';
import Custom from './Things/custom.jsx';
import Appp from './Cart/Appp.jsx';





function App() {
   
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
        <Route path='/Exam' element={<Appp/>}/>





        
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;