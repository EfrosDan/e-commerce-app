import React from 'react'
import Input from '../../components/Input';

const Category = ({handleChange}) => {
  return (
    <div>
        <h3 className="filter-title">Shop By Categories</h3>
          <div>
            <label  className='sidebar-label-container'>
              <input onChange={handleChange} type="radio" name='test' value=""/>
              <span className="checkmark"></span>All
            </label>
            <Input
            handleChange={handleChange}
            type="radio" 
            value="Phone"
            name="test"
            title="Phone"/>
            <Input
            handleChange={handleChange}
            type="radio"  
            value="Laptop"
            name="test"
            title="Laptop"/>
            <Input
            handleChange={handleChange}
            type="radio"   
            value="Watch"
            name="test"
            title="Watch"/>
            <Input
            handleChange={handleChange}
            type="radio"   
            value="Headphone"
            name="test"
            title="Headphone"/>
            <Input
            handleChange={handleChange}
            type="radio"   
            value="Accessories"
            name="test"
            title="Accessories"/>
          </div>
    </div>
  )
}

export default Category;