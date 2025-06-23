import { useState } from "react";
import { motion } from "framer-motion";
import {  useNavigate } from "react-router-dom";

function Item_desc({ item, addToCart,navigate  }) {
  const [activeImage, setActiveImage] = useState(item.mainImage);
  const [showModal, setShowModal] = useState(false);
   const navigatee = useNavigate();

  const handleBuyNow = () => {
    navigatee("/Bcheckout", { state: { item } });
  };

  return (
    <>
      <div className="tot">
        <div className="Main_content">
          <ul>
            <li className="itm_im_dett">
              <div className="image-gallery">
                <ul>
                  <li className="itm_im_det">
                    <div className="main-image">
                      <motion.img
                        src={activeImage}
                        alt="Main Product"
                        
                        key={activeImage}
                        className="fade-in"
                        onClick={() => setShowModal(true)}
                      />

                    </div>
                  </li>
                  <li className="itm_im_det">
                    <div className="thumbnails">
                      {item.thumbnails.map((thumb, index) => (
                        <motion.img
                          className={activeImage === thumb ? "active-thumb" : ""}
                          key={index}
                          src={thumb}
                          alt={`thumb-${index}`}

                          onClick={() => setActiveImage(thumb)}
                          style={{
                            cursor: "pointer",

                            width: "60px",
                            margin: "5px",
                            border:
                              activeImage === thumb ? "2px solid #000" : "none",
                          }}
                        />
                      ))}
                    </div>
                  </li>

                </ul>



              </div>
              {showModal && (
                <div className="zoom-modal" onClick={() => setShowModal(false)}>
                  <img src={activeImage} alt="Zoomed Product" />
                </div>
              )}
            </li>
            <li className="itm_im_dett">
              <div className="product-details">
                <h3 className="product-title">{item.title}</h3>
                <div className="r">{item.rating}</div>
                <div className="r">{item.badge}</div>
                <div className="price-section">
                  <span className="r">{item.price}</span>
                  <span className="r">{item.discount}</span>
                </div>
                <div className="r">{item.stockStatus}</div>
                <div className="quantity-cart">
                  <button onClick={() => addToCart(item)}>Add to Cart</button>


                  <button onClick={handleBuyNow}>Buy Now</button>
                </div>
                <div className="r">{item.offers}</div>
                <div className="highlights">
                  <h2 className="h22">Product Highlights</h2>
                  <ul>
                    {item.highlights.map((point, index) => (
                      <li className="l11" key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>

          </ul>
        </div>



        <div className="description">
          <h2 className="h22">About this item</h2>
          <div className="r">{item.description}</div>
        </div>
      </div>

    </>
  );

}

export default Item_desc;