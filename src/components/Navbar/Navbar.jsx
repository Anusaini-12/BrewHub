import coffee_logo from "/coffee_logo.png"
import "./Navbar.css"

const Navbar = () => {
  return (
   <div className="navbar ">
    <div className="nav-logo text-3xl text-white font-bold">
       <img src={coffee_logo} alt="" className="logo" />
       <p className="text-white text-5xl font-semibold">BrewHub</p>
    </div>

    <ul className="nav-links">
       <li>Home</li>
       <li>Coffee</li>
       <li>Shop</li>
       <li>Contact</li>
    </ul>

    <button className="login-btn btn">Login</button>
   </div>
  )
}

export default Navbar
