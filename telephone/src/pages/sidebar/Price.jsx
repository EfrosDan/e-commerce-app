import React from 'react'
import Input from '../../components/Input'
const Price = ({handleChange}) => {
    return (
      
    <div>
         <h5 className="sub-title">Price</h5>
            {/* <div>
              <div className="form-floating">
              <label htmlFor="floatingInput">From</label>
                <input type="text"
                className='form-control'
                placeholder=""/>
              </div>
            </div>
            <div>
              <div className="form-floating">
              <label htmlFor="floatingInput">To</label>
                <input type="text"
                className='form-control'
                placeholder=""/>
              </div>
            </div> */}
            <label htmlFor="price" className='sidebar-label-container'>
              <input onChange={handleChange} type="radio" name='test2' value="" id="price"/>
              <span className="checkmark"></span>All
            </label>
            <Input
            handleChange={handleChange} 
            value={30}
            name="test2"
            title="$0-$100"/>
            <Input
            handleChange={handleChange}  
            value={300}
            name="test2"
            title="$100-$500"/>
            <Input
            handleChange={handleChange}  
            value={2000}
            name="test2"
            title="$500-$2000"/>
            <Input
            handleChange={handleChange}  
            value={2500}
            name="test2"
            title="Over $2000"/>
    </div>
  );
};

export default Price;