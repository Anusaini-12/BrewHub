import { useState, useEffect } from "react";
import Hero from "./components/Hero/Hero"
import Background from "./components/Background/Background"
import Navbar from "./components/Navbar/Navbar";
import Coffee from "./components/Coffee/Coffee";
import Footer from "./components/Footer/Footer";
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
    <div  className="hero-section relative h-screen" id="home">
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
     
    <div id="coffee">
      <Coffee />
    </div>

    <div id="contact">
      <Contact />
    </div>

    <div>
      <Footer />
    </div>
    </>
  )
}

export default App
