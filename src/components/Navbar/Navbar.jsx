import coffee_logo from "/coffee_logo.png"
import "./Navbar.css"
import { useState } from "react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
   <div className="navbar ">
    <div className="nav-logo text-3xl text-white font-bold">
       <img src={coffee_logo} alt="" className="logo" />
       <p className="text-white text-5xl font-semibold">BrewHub</p>
    </div>

    {/* Menu button (visible on mobile) */}
      <button 
        className="menu-toggle" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fa-solid fa-bars text-2xl text-white cursor-pointer"></i>
      </button>

    <ul className={`nav-links ${isOpen ? "open" : ""}`}>
       <li><a href="#home">Home</a></li>
       <li><a href="#coffee">Coffee</a></li>
       <li><a href="#shop">Shop</a></li>
       <li><a href="#contact">Contact</a></li>
    </ul>

    <button className="login-btn btn">Login</button>
   </div>
  )
}

export default Navbar
