import React from 'react'

export default function ContactContent({ inView }) {
    
    const startingStyle= {
        position: "relative",
        right: "-60px",
        opacity: .1,
        transition: ".8s all",
        ...(inView ? 
            {
                right: "0px",
                opacity: 1
            }:{})
    }
    return (
        <div id="contact-content">
            <h2 className="heading">contact us</h2>
            <p style={{ ...startingStyle, transitionDelay: ".2s" }}>
                <img src={ require("../../img/maps-and-flags.svg") } alt="flag"/>
                <span>Address: 6736 S Sherbourne Dr Los Angeles, California(CA), 90056</span>
            </p>
            <p style={{ ...startingStyle, transitionDelay: ".4s" }}>
                <img src={ require("../../img/call-answer.svg") } alt="phone"/>
                <span>Call Us: +17174794388</span>
            </p>
            <p style={{ ...startingStyle, transitionDelay: ".6s" }}>
                <img src={ require("../../img/envelope.svg") } alt="email"/>
                <span>globaltradeusa@yahoo.com</span>
            </p>
            <p style={{ ...startingStyle, transitionDelay: ".8s" }}>
                <img src={ require("../../img/whatsapp.svg") } alt="whatsapp"/>
                <span>Whatsapp: +17174794388</span>
            </p>
        </div>
    )
}
