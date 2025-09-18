import { useState, useEffect } from "react";
import Hero from "./components/Hero/Hero"
import Background from "./components/Background/Background"
import Navbar from "./components/Navbar/Navbar";
import CoffeeCard from "./components/Coffee/CoffeeCard";
import Coffee from "./components/Coffee/Coffee";
import Footer from "./components/Footer/Footer";
import "./App.jsx"
import Contact from "./components/Contact/Contact.jsx";

const App = () => {

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
     setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count+1
      });
     }, 3000);
  }, []);
    
  return (
    <>
    <div  className="hero-section relative h-screen">
      <Navbar />
      <Background 
      heroCount={heroCount}
      playStatus={playStatus}
      />
      <Hero 
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
      setPlayStatus={setPlayStatus}
      />
    </div>
     
    <div>
      <Coffee />
    </div>

    <div>
      <Contact />
    </div>

    <div>
      <Footer />
    </div>
    </>
  )
}

export default App
