import React from 'react'
import Category from './Category';
import Availablity from './Availablity';
import Price from './Price';
import Tags from './Tags';

const Sidebar = ({handleChange,handleClick}) => {
  return (
    <div>
        <div className="filter-card">
          <Category handleChange={handleChange}/>
          <Availablity/>
           <Price handleChange={handleChange}/>
            <Tags handleClick={handleClick}/>
        </div>
    </div>
  )
}

export default Sidebar