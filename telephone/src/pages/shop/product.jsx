import React, { useContext } from 'react'
import { ShopContext } from '../../context/context-shop';
import { Link } from 'react-router-dom';

const Product = ( { id, type, brand, model, price, productImg, color }) => {
  const {addToCart, cartItems} = useContext(ShopContext);

  const carItemCount = cartItems[id];

    return (
    <div className="product">
        <Link to={`/product/${id}`}>
       
        <img src={productImg} alt="image of telephone" />
        </Link>
        <div className="description">
          <div className="category">
            {type}
          </div>
          <div className="link">
          <Link to={`/product/${id}`}>
            <p>
              <b>{brand}</b> {model} {color}
            </p>
            </Link> 
          </div>
            <p>${price}</p>
        </div>
        <button className='addToCartBttn' onClick={() => addToCart(id)}> Add to Cart {carItemCount > 0 && <> ({carItemCount}) </>}</button>
    </div>
  )
}

export default Product;