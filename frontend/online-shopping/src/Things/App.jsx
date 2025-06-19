import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Routes, Route } from 'react-router-dom';
import Apparel from './apparel'
import Football from './football'
import Footwear from './footwear'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/Footwear" element={<Footwear/>}></Route>
        <Route path="/Apparel" element={<Apparel/>}></Route>
        <Route path="/Football" element={<Football/>}></Route>
      </Routes>
    </>
  )
}

export default App
