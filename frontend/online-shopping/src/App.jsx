import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home.jsx'
import Login from './Login/Login.jsx';
import Signup from './Signup/Signup.jsx';
import Footwear from './Things/footwear.jsx';
import Apparel from './Things/apparel.jsx';
import Football from './Things/football.jsx';
import Custom from './Things/custom.jsx';
import Exa from './Login/exam.jsx';


function App() {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Footwear" element={<Footwear />} />
        <Route path="/Exam" element={<Exa />} />
        <Route path="/Apparel" element={<Apparel />} />
        <Route path="/Football" element={<Football />} />
        <Route path="/Custom" element={<Custom />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
