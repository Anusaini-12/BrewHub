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
          <h2 className="text-3xl text-gray-200">{heroContent[heroCount].text}</h2>
          <p className="text-6xl text-white font-bold mt-6">{heroContent[heroCount].subText}</p>
      </div>

      <div className="hero-explore">
          <button className="btn-grad">Explore</button>
      </div>

      <div className="hero-dot-btns">
        <ul className="dots">
            <li onClick={ () => setHeroCount(0) } className={heroCount == 0 ? "dot pink" : "dot"}></li>
            <li onClick={ () => setHeroCount(1) } className={heroCount == 1 ? "dot pink" : "dot"}></li>
            <li onClick={ () => setHeroCount(2) } className={heroCount == 2 ? "dot pink" : "dot"}></li>
        </ul>
      
        <div className="hero-play">
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
