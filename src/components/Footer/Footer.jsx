import coffee_logo from "/coffee_logo.png"
import "./Footer.css"
import fb from "../../assets/social-media/facebook.png"
import insta from "../../assets/social-media/instagram.png"
import twitter from "../../assets/social-media/twitter.png"
import linkedIn from "../../assets/social-media/linkedin.png"

const Footer = () => {
  return (
    <footer className="bg-orange-950 text-white pt-20">
      <div className="footer-links">

        <div className="nav-logo footer-logo">
          <img src={coffee_logo} alt="" className="logo" />
          <p className="text-white text-5xl font-semibold">BrewHub</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Privacy</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-pink-400">Terms of use</a></li>
            <li><a href="#" className="hover:text-pink-400">Privacy policy</a></li>
            <li><a href="#" className="hover:text-pink-400">Cookies</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-pink-400">Shop</a></li>
            <li><a href="#" className="hover:text-pink-400">Menu</a></li>
            <li><a href="#" className="hover:text-pink-400">Gift cards</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4">About</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-pink-400">Find a location</a></li>
            <li><a href="#" className="hover:text-pink-400">About us</a></li>
            <li><a href="#" className="hover:text-pink-400">Our story</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-pink-400">FAQs</a></li>
            <li><a href="#" className="hover:text-pink-400">Shipping & Delivery</a></li>
            <li><a href="#" className="hover:text-pink-400">Support</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-5">Follow Us</h3>
          <div className="social-links">
            <img src={fb} alt="" />
            <img src={insta} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedIn} alt="" />
          </div>
        </div>

      </div>

      <div className="footer-tag text-gray-400 mt-18">
       <p> © {new Date().getFullYear()} BrewHub. All rights reserved. </p>
      </div>
    </footer>
  );
};

export default Footer;
