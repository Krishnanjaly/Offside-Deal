import { color } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navv from "../../Home/Navv";

function Cart({ cartItems, removeFromCart }) {
  const navigate = useNavigate();

  return (
    <div>
      <Navv/>
      <h2>🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty 🛒.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cartItems.map((cartItem, index) => (
              <li
                key={index}
                style={{
                  border: "1px solid #ccc",
                  margin: "10px 0",
                  padding: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={cartItem.mainImage}
                  alt={cartItem.title}
                  width="50"
                  style={{ marginRight: "10px" }}
                />
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: "0 0 5px 0" }}>{cartItem.title}</h4>
                  <p style={{ margin: 0 }}>{cartItem.price}</p>
                </div>
               
                <button
                  onClick={() => {
                   
                    removeFromCart(index);
                  }}className="removebtn"
                  
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <button
            className="cartButton"
             onClick={() => navigate("/checkout", { state: { cartItems } })}
            style={{
              background: "white",
              color: "oaof1c",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              marginTop: "10px",
            }}
          >
           Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;