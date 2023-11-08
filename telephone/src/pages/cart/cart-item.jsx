import React, { useContext } from "react";
import { ShopContext } from "../../context/context-shop";

export const CartItem = (props) => {
    const { id, Brand, Model, price, productImg, color } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImg} />
      <div className="description">
        <p>
          <b>Brand: {Brand}</b>
        </p>
        <p>Model: {Model}</p>
        <p> Price: ${price}</p>
        <p>Color: {color}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};