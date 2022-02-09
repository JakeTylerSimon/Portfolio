import React, { useRef, useState, useContext } from 'react';
import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import emailjs from "@emailjs/browser"
import { ThemeContext } from "../../context";

const Contact = () => {
    const formRef = useRef();
    const [done, setdone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_p2ivfup', 'template_lmege9m', formRef.current, 'user_t1hUN72rIdfJqIzBvKPbJ')
        .then((result) => {
            console.log(result.text);
            setdone(true);
        }, (error) => {
            console.log(error.text);
        });

    }

  return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Lets discuss your project
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            951-751-1578
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />
                            Jtsimonbaseball@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" />
                            Corona, CA 92882
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Whats your story?</b> Get in touch. Always available for freelancing
                        if the right project comes along.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} >
                        <input style = {{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name"  />
                        <input style = {{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject"  />
                        <input style = {{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email"  />
                        <textarea style = {{backgroundColor: darkMode && "#333"}} name="message" placeholder="Message" rows="5" />
                        <button>Submit</button>
                        {done && "Thank you, you should recieve a response shortly!"}
                    </form>
                </div>
            </div>
        </div>
  );
};

export default Contact;
