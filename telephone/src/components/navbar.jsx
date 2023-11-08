import { ShoppingCart } from 'phosphor-react'
import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <div className="logo">
         <p>Logo</p>
        </div>
          <ul className="menu-items">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li> 
              <Link to="/cart">
                <ShoppingCart size={32}/>
              </Link>
            </li>
          </ul>
        </div>
    </nav>
  )
}
