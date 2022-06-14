import "./about.css"
import FramerMotion from "../framerMotion/framerMotion";
import {cards} from "../../framerMotionData"

const About = () => {

  return (

    <div className = "a">
        <div className =  "a-texts"> 
            <h1 className = "a-title">Learn more about me!</h1>
              <p className = "a-desc">
              Spent od time vscoding this section and it's still cheeks ong. click on a picture to learn more about me ig 
              </p>

            <div className = "a-list"> 
              {cards.map(card => (
                  <FramerMotion key = {card.id} img ={card.img} text = {card.text}/>
              ))}
            </div>

        </div>
    </div>

  )
}

export default About