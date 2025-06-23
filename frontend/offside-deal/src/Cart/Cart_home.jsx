import { useEffect, useState } from "react";
import Item_desc from "./components/item_desc";
import Navv from "../Home/Navv";
import axios from "axios";
import "./cart_index.css"
import { useParams } from "react-router-dom"; 

function Homee({ addToCart }) {
  const { id } = useParams(); 
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
  axios.get(`http://localhost:5000/api/footballs/${id}`)
    .then((res) => {
      console.log("Fetched item:", res.data); // confirms object shape
      setItemDetails(res.data);  // no [0] needed here
    })
    .catch((err) => console.error("Error fetching item:", err));
}, [id]);


  if (!itemDetails) {
    return <div>Loading item...</div>;
  }

  return (
    <>
      <Navv />
      <Item_desc item={itemDetails} addToCart={addToCart} />
    </>
  );
}

export default Homee;
