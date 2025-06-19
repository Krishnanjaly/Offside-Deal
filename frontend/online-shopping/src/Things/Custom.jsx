import React from 'react';
import { Link } from 'react-router-dom';
import "./Custom.css";
import Navv from '../Home/Navv';

function Custom() {
  return (
    <>
      <Navv/>
      <div className="middle">
        <h2>This item is not readily available. Please try again later...</h2>
      </div>
    </>
  );
}

export default Custom;
