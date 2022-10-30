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

                {/*
                <p className = "a-sub">
                    Here, you'll be able to learn more about me and what I like to do!
                </p>

                 <p className = "a-desc">
                    this is the sescription parttdkdkdkdkdk
                </p>*/}
                <div className="a-award">
                    {/*<img src={Award} alt="" className="a-award-img" /> */}
                    <div className="a-award-text">
                        <h4 className = "a-award-title">Student</h4>
                        
                        <p className="a-award-desc">
                            Currently, I am a sophomore at Rutgers University in New Jersey. 
                            My major is computer science and I plan to minor in Korean or math.
                            Even though I live close to campus, I dorm and it has been really fun 
                            so far. College is truly what you make of it and these semesters have been
                            flying. 
                        
                        </p>

                        <h4 className = "a-award-title">Ultimate Frisbee</h4>
                        <p className="a-award-desc">
                            High school ultimate frisbee teams are rare, but I was lucky enough to 
                            attend a school with a team. I played JV my first year, and varsity
                            the remaining three years. I have also played for a club team named DEVYL
                            where I played with a regional team to compete for national championship.
                            I currently play for the Rutgers club team, and I am hoping we can make 
                            it to college nationals!
                        </p>
                        
                        
                        <h4 className = "a-award-title">Content Creation</h4>
                        <p className="a-award-desc">
                            You might have come across the "ice cream guy" or "subway guy" 
                            on TikTok and YouTube. I followed their steps and recorded
                            my experiences working at Taco Bell. I first posted on TikTok, not 
                            expecting a lot of feedback, but I woke up the next day and saw 
                            my video had reached thousands of views. This made me excited
                            and I continued to create content on TikTok, eventually
                            extending my content to YouTube as well. 
                        </p>

                        <h4 className = "a-award-title">Traversing Flaneur</h4>
                        
                        <p className="a-award-desc">
                            On top of all of this, I love to travel. The past summer
                            I went to Hawaii with my family visiting Oahu and the Big Island.
                            Left and right, there was plenty of amazing food, people, culture, 
                            and nature. I also enjoy day trips to New York City, observing
                            the modernity around me and exploring new places. This summer I 
                            will be studying abroad at Ewha University, a college in 
                            Seoul, South Korea. I am extremely excited and plan to share
                            my experiences. 
                            
                        </p>


                    </div>
                </div>
        </div>
    </div>

  )
}



export default About