import "./about.css"
import Award from "../../img/fris1.jpeg"
import danAndLogan from "../../img/school1.JPG"

const About = () => {
  return (
    <div className = "a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src= {danAndLogan} 
                alt="" 
                className="a-img" 
                />
            </div>
        </div>
        <div className="a-right">
            <h1 className = "a-title">About Me</h1>
                <p className = "a-sub">
                    Here, you'll be able to learn more about me and what I like to do!
                </p>
                {/* <p className = "a-desc">
                    this is the sescription parttdkdkdkdkdk
                </p>*/}
                <div className="a-award">
                    <img src={Award} alt="" className="a-award-img" />
                    <div className="a-award-text">
                        <h4 className = "a-award-title">Ultimate Frisbee</h4>
                        <p className="a-award-desc">
                            I have been playing ultimate since high school! High school 
                            ultimate frisbee teams are rare, but I was lucky enough to 
                            attend a school with a team. I played JV my first year, and varisty
                            the remaining three years. I have also played for a club team named DEVYL
                            where I played with a regional team to compete for national championship.
                            I currently play for the Rutgers club team, and I am hoping we can make 
                            it to college nationals!
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About