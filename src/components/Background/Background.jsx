import image1 from "../../assets/image1.jpg"
import image2 from "../../assets/image2.jpg"
import image3 from "../../assets/image3.jpg"
import video from "../../assets/video.mp4"
import "./Background.css"

const Background = ({ heroCount , playStatus }) => {

  if(playStatus) {
    return(
      <video className="background fade-in" autoPlay muted loop>
        <source src={video}></source>
      </video>
    )
  }else if(heroCount == 0) {
    return(
      <img 
      src={image1} 
      alt="" 
      className="background" />
    )
  }else if(heroCount == 1){
    return(
      <img 
      src={image2} 
      alt=""
      className="background" />
    )
  }else{
    return(
      <img 
      src={image3} 
      alt="" 
      className="background" />
    )
  }
}

export default Background
