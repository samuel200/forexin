import React from 'react';

export default function IllustrationSide({ inView }) {

    return (
        <section id="about-illustration-side" >
            <img src={ require("../../img/about_illustration.png") } 
             alt="about-illustration"
             style={ inView ? {opacity: 1,left: "0px" } : {} } />
        </section>
    )
}
