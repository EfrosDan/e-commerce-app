import React, { useContext } from 'react'

import { ShopContext } from '../../context/context-shop';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../../../products';

const InfoProduct = () => {
  // get the product id from the url
  const {id} = useParams();
  const {addToCart} = useContext(ShopContext);

  const product = PRODUCTS.filter(product => product.id === parseInt(id));
  console.log(product)
  return (
    <div className="container">
        <h1>{id} id</h1> 
    </div>
  )
}

export default InfoProduct;