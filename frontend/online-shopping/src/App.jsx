import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home.jsx'
import Login from './Login/Login.jsx';
import Signup from './Signup/Signup.jsx';


function App() {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
