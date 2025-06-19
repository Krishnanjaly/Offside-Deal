import React from 'react';
import { Link } from 'react-router-dom';
import "./Custom.css";

function Custom() {
  return (
    <>
      <div className="top-link">
        <Link to="/Home">Home</Link>
      </div>

      <div className="middle">
        <h2>This item is not readily available. Please try again later...</h2>
      </div>
    </>
  );
}

export default Custom;
