import { useLocation, useNavigate } from "react-router-dom";


function BuyNowCheckout() {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state?.item;

  const handlePlaceOrder = () => {
    navigate("/success");
  };

const handleBackHome = () => {
    navigate("/HomeCart");
  };
  const getEstimatedDeliveryDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 5);
    return today.toDateString();
  };
  if (!item) {
    return <p>No item found for checkout.</p>;
  }

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      <div className="checkout-section">
        <h2 className="h22">Customer Information</h2>
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Phone Number" />
        <input type="email" placeholder="Email Address" />
        <textarea placeholder="Delivery Address"></textarea>
      </div>

      <div className="checkout-section">
        <h2 className="h22">Item Summary</h2>
        <div className="order-item">
          <img src={item.mainImage} alt={item.title} width="80" />
          <div>
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            <p className="delivery-date">
                   Estimated Delivery: {getEstimatedDeliveryDate()}
                </p>
            
          </div>
        </div>
        <div style={{ marginTop: "10px", fontWeight: "bold" }}>
          Total: {item.price}
        </div>
      </div>

      <div className="checkout-section">
        <h2 className="h22">Payment Method</h2>
        <label className="lab"><input type="radio" name="payment" /> Cash on Delivery</label>
        <label className="lab"><input type="radio" name="payment" /> UPI / Wallet</label>
        <label className="lab"><input type="radio" name="payment" /> Credit / Debit Card</label>
      </div>

      <button className="place-order-btn" onClick={handlePlaceOrder}>
        Place Order
      </button>
      <button className="back-home-btn" onClick={handleBackHome}>
            Back to Home
        </button>
    </div>
  );
}

export default BuyNowCheckout;
