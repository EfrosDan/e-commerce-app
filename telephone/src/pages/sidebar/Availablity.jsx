import React from 'react'

const Availablity = ({handleClickBox}) => {
  return (
    <div>
        <h3 className="filter-title">Filter By</h3>
          <div>
            <h5 className="sub-title">Availablity</h5>
            <div className="form-check">
              <input onClick={handleClickBox} className="form-check-input" type="checkbox" value="in-stock" id="flexCheckDefault" name="test3" />
              <label htmlFor='flexCheckDefault'>
                  In Stock
              </label>
          </div>
            <div className="form-check">
              <input onClick={handleClickBox} className="form-check-input" type="checkbox" value="out-stock" id="flexCheckChecked" name="test3" />
              <label htmlFor='flexCheckDefault' >
                Out of Stock
              </label>
            </div>
          </div>
    </div>
  )
}

export default Availablity