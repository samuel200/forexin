import React from 'react'

export default function IllustrationSide({ inView }) {
    
    const startingStyle= {
        position: "relative",
        left: "-60px",
        opacity: .1,
        transition: ".8s all",
        ...(inView ? 
            {
                left: "0px",
                opacity: 1
            }:{})
    }

    return (
        <div id="contact-illustration">
            <img src={ require("../../img/mobile.png") } alt="mobile-illustration" style={ startingStyle }/>
        </div>
    )
}
