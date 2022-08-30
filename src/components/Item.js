import React from "react";
import { useState } from "react"

function Item({ name, category }) {
  // cart
  const [cart, setCart] = useState(false)

  const handleCart = () => { setCart(!cart) }
  return (
    <li className={cart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
      onClick={handleCart}
      className={cart ? "remove" : "add"}
      >
        {cart ? "Remove From" : "Add To"} Your Cart
      </button>
    </li>
  );
}

export default Item;
