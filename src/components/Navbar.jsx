import React from 'react'
import { NavLink } from 'react-router-dom'
import "../scss/Navbar.scss"

const Navbar = () => {
  return (
    <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
    </nav>
  )
}

export default Navbar