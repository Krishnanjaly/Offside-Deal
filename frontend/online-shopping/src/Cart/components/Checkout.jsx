
import { useNavigate } from 'react-router-dom';

function Checkout({ cartItems }) {
  const navigate = useNavigate();
  const cartItemss = location.state?.cartItemss || [];


  const handlePlaceOrder = () => {
    navigate('/success');
  };
const handleBackHome = () => {
    navigate("/");
  };
   const getEstimatedDeliveryDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 5);
    return today.toDateString();
  };
  const totalAmount = cartItems.reduce((total, item) => {
    const numericPrice = Number(item.price.replace(/[^\d]/g, ''));
    return total + numericPrice;
  }, 0);

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      
      <div className="checkout-section">
        <h2>Customer Information</h2>
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Phone Number" />
        <input type="email" placeholder="Email Address" />
        <textarea placeholder="Delivery Address"></textarea>
      </div>

      
       <div className="checkout-section">
        <h2>Order Summary</h2>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div className="order-item" key={index}>
              <img src={item.mainImage} alt={item.title} width="80" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.price}</p>
                <p className="delivery-date">
                   Estimated Delivery: {getEstimatedDeliveryDate()}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No items in order.</p>
        )}

        {/* Total */}
        {cartItems.length > 0 && (
          <div className="total-amount">
            Total: ₹{totalAmount.toLocaleString()}
          </div>
        )}
      </div>


     
      <div className="checkout-section">
        <h2>Payment Method</h2>
        <label><input type="radio" name="payment" /> Cash on Delivery</label>
        <label><input type="radio" name="payment" /> UPI / Wallet</label>
        <label><input type="radio" name="payment" /> Credit / Debit Card</label>
      </div>

     
      {cartItems.length > 0 && (
        <button className="place-order-btn" onClick={handlePlaceOrder}>
          Place Order
        </button>
      )}
      <button className="back-home-btn" onClick={handleBackHome}>
            Back to Home
        </button>
    </div>
  );
}

export default Checkout;
