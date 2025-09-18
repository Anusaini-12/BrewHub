import espresso from "../../assets/coffee-lists/espresso.webp"
import cappuccino from "../../assets/coffee-lists/cappuccino.jpg"
import latte from "../../assets/coffee-lists/latte.jpg"
import mocha from "../../assets/coffee-lists/mocha.png"
import "./Coffee.css"

const CoffeeCard = () => {
  const coffeeMenu = [
    { name: "Espresso", price: "199", desc: "Strong & bold single shot", img: espresso },
    { name: "Cappuccino", price: "159", desc: "Espresso with steamed milk foam", img: cappuccino },
    { name: "Latte", price: "250", desc: "Smooth blend of coffee & milk", img: latte },
    { name: "Mocha", price: "145", desc: "Rich espresso with chocolatey goodness", img: mocha },
  ];

  return (
    <div className="coffee-menu-section w-full bg-orange-950">     
      <h2 className="text-4xl text-white font-semibold text-center p-12">Our Special Coffee</h2>
      <div className="coffee-menu">
        {coffeeMenu.map((item, i) => (
          <div key={i} className="coffee-card mb-8 rounded-sm shadow-lg bg-orange-100">
            <img src={item.img} alt={item.name} className="rounded-sm h-50 w-full object-cover" />
            <h3 className="text-2xl font-semibold mt-4">{item.name}</h3>
            <p className="text-gray-600 mt-2">{item.desc}</p>
            <span className="flex justify-between items-center p-2">
            <p className="text-pink-700 font-bold text-xl mt-3">Rs. {item.price}</p>
            <button type="button" className="mt-4 text-white bg-gradient-to-r from-orange-800 via-orange-900 to-orange-950 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Order now</button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeCard;

