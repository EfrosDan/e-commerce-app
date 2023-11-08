import React from 'react'
import img5 from '../../assets/54481.png';
import { PRODUCTS } from '../../../products';

const Nav = ({handleInputChange, query, handleSortChange, sortedType}) => {

  

  return (
    <div>
        <div className="filter-sort-grid">
            <p>Sort By:</p>
              <select defaultValue={'DEFAULT'} onChange={handleSortChange} value={sortedType} className="form-control form-select">
                <option value="DEFAULT" disabled>None</option>
                <option value="ascending">Alphabetically, A-Z</option>
                <option value="descending">Alphabetically, Z-A</option>
                <option value="price-ascending">Price, low to high</option>
                <option value="price-descending">Price, high to low</option>
              </select>
              <div className="search">
                <img src={img5} alt="search" />
                <input type="text"
                className='search-input'
                onChange={handleInputChange}
                value={query}
                placeholder='Search' />
              </div>
              <div className="form-grid">
                <p className="totalproducts">{PRODUCTS.length} products</p>
              </div>
        </div>
    </div>
  );
};

export default Nav;