import React from 'react';
import { Link } from 'react-scroll';

export default function FootSection({ style }) {
    return (
        <footer style={ style }>
            <div id="footer-icon-holder">
                <Link duration={ 500 } smooth={ true } to="contact-us"><img src={ require("../../img/maps-and-flags.svg") } alt="maps-and-flags"/></Link>
                <Link duration={ 500 } smooth={ true } to="contact-us"><img src={ require("../../img/call-answer.svg") } alt="call-answer"/></Link>
                <Link duration={ 500 } smooth={ true } to="contact-us"><img src={ require("../../img/envelope.svg") } alt="envelope"/></Link>
                <Link duration={ 500 } smooth={ true } to="contact-us"><img src={ require("../../img/whatsapp.svg") } alt="whatsapp"/></Link>
            </div>
            <div id="footer-link-holder">
                <a href="#">Copyright © 2015 - {(new Date()).getFullYear()} All Right Reserved.</a>
                <a href="#">Terms Of Use | Privacy Policy</a>
            </div>
        </footer>
    )
}
