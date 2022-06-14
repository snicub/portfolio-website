import "./about.css"
import FramerMotion from "../framerMotion/framerMotion";
import {cards} from "../../framerMotionData"

const About = () => {

  return (

    <div className = "a">
        <div className =  "a-texts"> 
            <h1 className = "a-title">Learn more about me!</h1>
              <p className = "a-desc">
              Snikizzy vscode tf uped this section. click on the picture ot learn more 
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