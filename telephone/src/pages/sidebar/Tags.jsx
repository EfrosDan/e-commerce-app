import React from 'react'
import Button from '../../components/Button'
const Tags = ({handleClick}) => {
  return (
    <>
    <div>
         <h3 className="filter-title">Product Tags</h3>
         <div className="product-tags">
            <Button onClickHandler={handleClick} value="Phone" title="Phone" />
            <Button onClickHandler={handleClick} value="Headphone" title="Headphone" />
            <Button onClickHandler={handleClick} value="Laptop" title="Laptop" />
            <Button onClickHandler={handleClick} value="Watch" title="Watch" />
            <Button onClickHandler={handleClick} value="iPhone" title="iPhone" />
            <Button onClickHandler={handleClick} value="Samsung" title="Samsung" />
            <Button onClickHandler={handleClick} value="Accessories" title="Accessories" />
        </div>
    </div>
    </>
    

  )
}

export default Tags