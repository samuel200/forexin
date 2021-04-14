import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutContentSide({ inView }) {
    return (
        <section id="about-content-side">
            <h2 className="heading" style={ inView ? {opacity: 1, top: "0px"} : {} }>about us</h2>
            <p style={ inView ? {opacity: 1, top: "0px"} : {} }>
                We do engage in the new crypto system algorithms on the bitcoin which 
                enables us to generate profit for investors, our crypto technical expertise 
                do trade on forex market and exchange our investors investment and use them
                in buying digital goods on the market place making us to top rank on the 
                foreign stock broker exchange in trading activities in the crypto market.
            </p>
            <p style={ inView ? {opacity: 1, top: "0px"} : {} }>
                On-line traders are now able to gain access to pricing and liquidity previously 
                only available to investment banks and high net worth individuals.
            </p>
            <Link to="/signup" className={inView ?  "sign-up-button": "" }>Sign Up</Link>
        </section>
    )
}
