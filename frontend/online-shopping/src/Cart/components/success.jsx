import React from "react";
import { useNavigate } from "react-router-dom";


const Success = () => {
  const navigate = useNavigate();
  const orderNumber = "OSD" + Math.floor(Math.random() * 1e6).toString().padStart(6, "0");

  return (
    <div className="success-container">
      <div className="success-card">
        <div className="success-icon"></div>
        <h1>Order Successfully Placed!</h1>
        <p>Thank you for shopping with <strong>OffSideDeals ⚽</strong></p>
        <div className="order-number">Order Number: <span>#{orderNumber}</span></div>

        <div className="status-section">
          <h2>What's Next?</h2>
          <div className="status-item">
            <span className="status-icon"></span>
            <div>
              <h4>Order Confirmed</h4>
              <p>Your order has been received and is being processed</p>
            </div>
          </div>
          <div className="status-item">
            <span className="status-icon"></span>
            <div>
              <h4>Preparing Your Order</h4>
              <p>We're getting your football gear ready for shipment</p>
            </div>
          </div>
          <div className="status-item">
            <span className="status-icon"></span>
            <div>
              <h4>On Its Way</h4>
              <p>You'll receive tracking info once shipped</p>
            </div>
          </div>
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>
          <p><strong>Order Number:</strong> #{orderNumber}</p>
          <p><strong>Estimated Delivery:</strong> 3-5 business days</p>
          <p><strong>Payment Method:</strong> **** 1234</p>
        </div>

        <div className="success-buttons">
          <button onClick={() => alert("Tracking not implemented yet!")}>Track Your Order ➝</button>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default Success;
