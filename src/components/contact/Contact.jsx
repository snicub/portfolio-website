import "./contact.css"
import { useRef } from "react"
import emailjs from '@emailjs/browser'
import React, { useState } from "react";

import SaveIcon from '@material-ui/icons/Send'
import Email from '@material-ui/icons/Email'
import Address from '@material-ui/icons/Home'
import Button from '@mui/material/Button';


const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);


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
                <h1 className="c-title">Contact Me</h1>
                     <div className="c-info">
                        <div className="c-info-item">
                             {<Email style={{minWidth: '40px'}}/>} 
                            daniel[dot]han17[at]rutgers[dot]edu
                        </div>
                        <div className="c-info-item">
                            {<Address style={{minWidth: '40px'}} />} 
                            New Brunswick, NJ 08901
                        </div>
                     </div>
            </div>
            <div className = "c-right">
                <p className = "c-desc">
                    <b>What's your story?</b> Down to eat at neilson dhall if you swipe me
                </p>
                <form ref = {formRef} onSubmit = {handleSubmit}>

                    <input  type="text" placeholder="Name" name = "user_name"/>
                    <input type="text" placeholder="Subject" name = "user_subject"/>
                    <input type="text" placeholder="Email" name = "user_email"/>
                    <textarea rows="5" placeholder = "Message" name = "message" />
                    
                    <Button 
                    onClick={handleSubmit}
                    className = "c-btn"
                    endIcon = {<SaveIcon/>} 
                    variant = "contained" 
                    color = "primary" 
                    >
                        Submit
                    </Button>
                    {done && " Sent! Daniel will hit your line as soon as possible."}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact