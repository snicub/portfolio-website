import "./about.css"
import Award from "../../img/mom.png"

const About = () => {
  return (
    <div className = "a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="https://images.pexels.com/photos/12319913/pexels-photo-12319913.jpeg" 
                alt="" 
                className="a-img" 
                />
            </div>
        </div>
        <div className="a-right">
            <h1 className = "a-title"> About Me</h1>
                <p className = "a-sub">
                    This is the paragraph a sub part idk
                </p>
                <p className = "a-desc">
                    this is the sescription parttdkdkdkdkdk
                </p>
                <div className="a-award">
                    <img src={Award} alt="" className="a-award-img" />
                    <div className="a-award-text">
                        <h4 className = "a-award-title">Taco Bell Live Mas Scholarship</h4>
                        <p className="a-award-desc">
                            Won this for making a video describing my passion in comptuer science 
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About