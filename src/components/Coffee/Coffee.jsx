import cold_coffee from "../../assets/cold_coffee.png"
import hot_coffee from "../../assets/hot_coffee.png"
import cup_coffee from "../../assets/cup_coffee.png"
import "./Coffee.css"
import CoffeeCard from "./CoffeeCard"

const Coffee = () => {

let coffees = [
    {title: "Cold Coffee", about: "Chilled, creamy, and refreshing for a cool delight.", image: cold_coffee},
    {title: "Hot Coffee", about: "A warm and comforting brew, perfect to kickstart your day.", image: hot_coffee},
    {title: "Cup Coffee", about: "A classic cup of coffee to enjoy anytime, anywhere.", image: cup_coffee}
]
  return (
    <>
    <div className="coffee">
        <div className="coffee-info mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center">Fresh and 
            <span className="text-3xl text-pink-700 font-semibold"> Tasty Coffee</span> </h2>
            <p className="text-center mt-6">Experience the perfect blend of aroma and flavor. Whether you love it hot, chilled,
            or in a cozy cup, we've got the coffee that matches your mood.
        </p>
        </div>
         
        <div className="coffee-cups flex flex-col lg:flex-row gap-6 lg:gap-16 justify-center items-center">
            {coffees.map((coffee, index) => (
              <div className="coffee-cup pb-12 pt-6 sm:pt-14 md:pt-12 lg:pt-3" key={index}>
                 <img src={coffee.image} alt={coffee.title} className="coffee-img"/>
                 <h2 className="text-2xl font-bold text-pink-700 text-center">{coffee.title}</h2>
                 <p className="text-black mt-2 text-center">{coffee.about}</p>
              </div>
              
            ))}
        </div>
    </div>
        <div id="shop">
         <CoffeeCard />
       </div>
    </>
  )
}

export default Coffee
