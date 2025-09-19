import coffee_logo from "/coffee_logo.png"
import "./Footer.css"
import fb from "../../assets/social-media/facebook.png"
import insta from "../../assets/social-media/instagram.png"
import twitter from "../../assets/social-media/twitter.png"
import linkedIn from "../../assets/social-media/linkedin.png"

const Footer = () => {
  return (
    <footer className="bg-orange-950 text-white">

      <div className="footer-links pt-20 pb-10">

        <div className="nav-logo footer-logo">
          <img src={coffee_logo} alt="" className="logo" />
          <p className="text-white text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-semibold">BrewHub</p>
        </div>

        <div className="footer-link">
          <h3 className="text-md sm:text-xl md:text-xl lg:text-xl font-semibold mb-4">Privacy</h3>
          <ul className="space-y-2 text-gray-300 text-md sm:text-md md:text-md lg:text-md">
            <li><a href="#" className="hover:text-pink-400">Terms of use</a></li>
            <li><a href="#" className="hover:text-pink-400">Privacy policy</a></li>
            <li><a href="#" className="hover:text-pink-400">Cookies</a></li>
          </ul>
        </div>
        
        <div className="footer-link">
          <h3 className="text-md sm:text-xl md:text-xl lg:text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300 text-md sm:text-md md:text-md lg:text-md">
            <li><a href="#" className="hover:text-pink-400">Shop</a></li>
            <li><a href="#" className="hover:text-pink-400">Menu</a></li>
            <li><a href="#" className="hover:text-pink-400">Gift cards</a></li>
          </ul>
        </div>
        
        <div className="footer-link">
          <h3 className="text-md sm:text-xl md:text-xl lg:text-xl font-semibold mb-4">About</h3>
          <ul className="space-y-2 text-gray-300 text-md sm:text-md md:text-md lg:text-md">
            <li><a href="#" className="hover:text-pink-400">Find a location</a></li>
            <li><a href="#" className="hover:text-pink-400">About us</a></li>
            <li><a href="#" className="hover:text-pink-400">Our story</a></li>
          </ul>
        </div>

        <div className="footer-link">
          <h3 className="text-md sm:text-xl md:text-xl lg:text-xl font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-gray-300 text-md sm:text-md md:text-md lg:text-md">
            <li><a href="#" className="hover:text-pink-400">FAQs</a></li>
            <li><a href="#" className="hover:text-pink-400">Shipping & Delivery</a></li>
            <li><a href="#" className="hover:text-pink-400">Support</a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-10">
          <h3 className="text-md sm:text-xl md:text-xl lg:text-xl font-semibold mb-10">Follow Us</h3>
          <div className="social-links w-8 sm:w-8 md:w-8 lg:w-8 h-auto gap-5 mr-40">
            <img src={fb} alt="" />
            <img src={insta} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedIn} alt="" />
          </div>
      </div>

      <div className="footer-tag text-gray-400 ">
       <p> © {new Date().getFullYear()} BrewHub. All rights reserved. </p>
      </div>
    </footer>
  );
};

export default Footer;
