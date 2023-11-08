import React from 'react'

const Availablity = () => {
  return (
    <div>
        <h3 className="filter-title">Filter By</h3>
          <div>
            <h5 className="sub-title">Availablity</h5>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label htmlFor='flexCheckDefault' className="form-check-label">
                  In Stock
              </label>
          </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              <label htmlFor='flexCheckDefault' className="form-check-label">
                Out of Stock
              </label>
            </div>
          </div>
    </div>
  )
}

export default Availablity