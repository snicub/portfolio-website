import "./intro.css"
import Me from '../../img/MEPNG.png'


const Intro = () => {

    return(

        <div className = "i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 classname = "i-intro">Hello, my name is</h2>
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
                        I am a sophomore at Rutgers University majoring in computer science. 
                        Currently, I am an intern at Colgate Palmolive focusing on writing C programs for IoT devices. 
                        I also enjoy content creation on TikTok and
                        YouTube. In my free time, I play competitive ultimate frisbee and currently play for the Rutgers club team. 
                        I also love traveling no matter how close or far.
                        Some might call me an academic weapon. 
                    </p>
                </div>
              {/*   <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg> */}
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    )
    
}

export default Intro