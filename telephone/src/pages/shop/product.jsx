import React, { useContext } from 'react'
import { ShopContext } from '../../context/context-shop';

const Product = ( { id, brand, model, price, productImg, color }) => {
  const {addToCart, cartItems} = useContext(ShopContext);

  const carItemCount = cartItems[id];

    return (
    <div className="product">
        <img src={productImg} alt="image of telephone" />
        <div className="description">
            <p>
                <b>{brand}</b> {model} {color}
            </p>
            <p>${price}</p>
        </div>
        <button className='addToCartBttn' onClick={() => addToCart(id)}> Add to Cart {carItemCount > 0 && <> ({carItemCount}) </>}</button>
    </div>
  )
}

export default Product;