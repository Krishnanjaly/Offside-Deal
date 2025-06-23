import React from "react";
import { useNavigate } from "react-router-dom";



const Success = () => {
  const navigate = useNavigate();
  const orderNumber = "OSD" + Math.floor(Math.random() * 1e6).toString().padStart(6, "0");

  
  const handleGoBack = () => {
    navigate("/Home") 
  };
  const getEstimatedDeliveryDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 5);
    return today.toDateString();
  };
    
  return (
    <>
   
    <div className="success-container">
      
      <div className="success-card">
        <div className="success-icon"></div>
        <h3 className="success">Order Successfully Placed!</h3>
        <p className="pp">Thank you for shopping with <strong>OffSideDeals ⚽</strong></p>
        <div className="order-number">Order Number: <span>#{orderNumber}</span></div>

        <div className="status-section">
         
          <div className="status-item">
            <span className="status-icon"></span>
            <div>
              <h4 className="h44">Order Confirmed</h4>
              <p className="pp">Your order has been received and is being processed</p>
            </div>
          </div>
          <div className="status-item">
            <span className="status-icon"></span>
            <div>
              <h4 className="h44">Preparing Your Order</h4>
              <p className="pp">We're getting your football gear ready for shipment</p>
            </div>
          </div>
          <div className="status-item">
            <span className="status-icon"></span>
            <div>
              <h4 className="h44">On Its Way</h4>
              <p className="pp">You'll receive tracking info once shipped</p>
            </div>
          </div>
        </div>

        <div className="order-summary">
          <p  className="pp">Order Summary</p>
          <p className="pp"><strong>Order Number:</strong> #{orderNumber}</p>
          <p className="pp"><strong>Estimated Delivery:</strong>{getEstimatedDeliveryDate()}</p>
          <p className="pp"><strong>Payment Method:</strong> **** 1234</p>
        </div>

        <div className="success-buttons">
          <button onClick={() => alert("Tracking not implemented yet!")}>Track Your Order ➝</button>
          <button onClick={handleGoBack}>Continue Shopping</button>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Success;
