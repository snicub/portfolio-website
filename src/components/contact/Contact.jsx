import "./contact.css"
import Phone from "../../img/school.jpg"
import Email from "../../img/school.jpg"
import Address from "../../img/school.jpg"
import { useRef } from "react"
import emailjs from '@emailjs/browser'
import React, { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context"



const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_zljl1y8', 
            'template_2sb4ff8', 
            formRef.current,
            'H_BiFDStxac_1fKDS'
            )

        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });

    }
  return (
    <div className = "c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className = "c-left">
                <h1 className="c-title">Let me answer your questions!</h1>
                     <div className="c-info">
                        <div className="c-info-item">
                            <img 
                            src={Phone} 
                            alt="" 
                            className="c-icon" />
                            +1 123 456 7890
                        </div>
                        <div className="c-info-item">
                            <img 
                            src={Email} 
                            alt="" 
                            className="c-icon" />
                            contact@dhan.com
                        </div>
                        <div className="c-info-item">
                            <img 
                            src={Address} 
                            alt="" 
                            className="c-icon" />
                            52 College Ave, New Brunswick, NJ 08812
                        </div>
                     </div>
                     
            </div>
            <div className = "c-right">
                <p className = "c-desc">
                    <b>What's your story?</b> Get in touch. Always making ocntent for you ong. 
                </p>
                <form ref = {formRef} onSubmit = {handleSubmit}>
                    <input style = {{backgroundColor: darkMode && "#333" }} type="text" placeholder="Name" name = "user_name"/>
                    <input style = {{backgroundColor: darkMode && "#333" }} type="text" placeholder="Subject" name = "user_subject"/>
                    <input style = {{backgroundColor: darkMode && "#333" }} type="text" placeholder="Email" name = "user_email"/>
                    <textarea style = {{backgroundColor: darkMode && "#333" }} rows="5" placeholder = "Message" name = "message" />
                    <button>Submit</button>
                    {done && "Thank you!"}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact