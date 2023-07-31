import "./intro.css"
import Me from '../../img/MEPNG.png'


const Intro = () => {

    return(

        <div className = "i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className = "i-intro">Hello, my name is</h2>
                    <h1 className = "i-name ">Daniel Han</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Computer Science Student</div>
                            <div className="i-title-item">Ultimate Frisbee Player</div>
                            <div className="i-title-item">Content Creator</div>
                            <div className="i-title-item">Christopher Columbus</div>
                            <div className="i-title-item">Personal Chef</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        I'm a junior at Rutgers University majoring in computer science. 
                        Currently, I am an intern at Colgate-Palmolive working in full stack development.  
                        I also enjoy content creation on TikTok and
                        YouTube. In my free time, I play competitive ultimate frisbee and play for the Rutgers club team. 
                        I also love traveling no matter how close or far.
                        Some might call me an academic weapon. 
                    </p>
                </div>
              {}
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    )
    
}

export default Intro