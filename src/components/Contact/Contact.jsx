import coffee_banner from "../../assets/coffee_banner.jpg"
import "./Contact.css"
const Contact = () => {
  return (
    <div className="contact">

    <div className="contact-background w-full">
        <img src={coffee_banner} alt="" />
    </div>
    
    <div className="contact-info py-40 px-60">
       <h2 className="text-4xl font-bold text-pink-800">Join in and get 15% Off!</h2>
       <p className="pt-6">Subscribe to our newsletter and get 15% off discount code.</p>
       <div className="email-section">
          <input type="email" className="email" />
          <button className="rounded-full bg-orange-900 py-1 px-5 text-white bg-gradient-to-r from-orange-800 via-orange-900 to-orange-950 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800">Subscribe</button>
       </div>
    </div>
    </div>
  )
}

export default Contact
