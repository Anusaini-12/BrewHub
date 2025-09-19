import coffee_banner from "../../assets/coffee_banner.jpg"
import "./Contact.css"
const Contact = () => {
  return (
    <div className="contact">

    <div className="contact-background w-full">
        <img src={coffee_banner} alt="coffee-banner" />
    </div>
    
    <div className="contact-info py-10 px-8 sm:py-20 md:py-20 lg:py-40 sm:px-20 md:px-20 lg:px-60">
       <h2 className="text-xl font-bold text-pink-800 sm:text-2xl md:text-3xl lg:text-5xl">Join in and get 15% Off!</h2>
       <p className="pt-6">Subscribe to our newsletter and get 15% off discount code.</p>
       <div className="email-section">
          <input type="email" className="email" />
          <button className="text-sm sm:text-md md:text-md lg:text-md rounded-full bg-orange-900 py-1 px-3 sm:px-5 md:px-5 lg-px-5 text-white bg-gradient-to-r from-orange-800 via-orange-900 to-orange-950 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800">Subscribe</button>
       </div>
    </div>
    </div>
  )
}

export default Contact
