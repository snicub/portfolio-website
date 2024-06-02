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
                        I'm a senior at Rutgers University majoring in computer science. 
                        Currently, I am an intern at Nestle Nespresso working in web dev.  
                         In my free time, I enjoy content creation, playing ultimate frisbee, and cooking.
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