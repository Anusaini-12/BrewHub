import "./Hero.css"
import play from "../../assets/play_icon.png"
import pause from "../../assets/pause_icon.png"

const Hero = ({ heroCount, setHeroCount, setPlayStatus, playStatus }) => {

  let heroContent = [
    {text: "Welcome!", subText: "We serve the richest coffee in the city" },
    {text: "Brew the Perfect Moment", subText: "Fresh beans and endless energy in every cup." },
    {text: "Coffee. Crafted with Love", subText: "Experience the art of brewing, one sip at a time." },
  ]
  return (
    <div className="hero">
      <div className="hero-text">
          <h2 className="text-gray-200 text-xl sm:text-xl md:text-2xl lg:text-3xl">{heroContent[heroCount].text}</h2>
          <p className="text-white font-bold text-4xl sm:text-4xl md:text-5xl lg:text-5xl mt-6">{heroContent[heroCount].subText}</p>
      </div>

      <div className="hero-explore ">
          <a href="#coffee"><button className="btn-grad">Explore</button></a>
      </div>

      <div className="hero-dot-btns">
        <ul className="dots">
            <li onClick={ () => setHeroCount(0) } className={heroCount == 0 ? "dot pink" : "dot"}></li>
            <li onClick={ () => setHeroCount(1) } className={heroCount == 1 ? "dot pink" : "dot"}></li>
            <li onClick={ () => setHeroCount(2) } className={heroCount == 2 ? "dot pink" : "dot"}></li>
        </ul>
      
        <div className="hero-play mr-6 sm:mr-3 md:mr-7">
          <img 
          onClick={() => setPlayStatus(!playStatus)}
          src={playStatus ? pause : play} 
          alt=""
          />
          <p>See the video</p>
        </div>
      </div>

    </div>

  )
}

export default Hero;
