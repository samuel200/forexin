import React, { useEffect } from 'react';
import $ from 'jquery';
import ContactUs from '../ContactUs/ContactUs';
import FootSection from '../FootSection/FootSection';
import MessageUs from '../MessageUs/MessageUs';

export default function ContactPage() {
    useEffect(()=>{
        
        $('.page-holder').on("load", ()=>{
        $("#navigation-bar").css({display: "flex"})
        $("#to-top").css({display: "block"})
        $("canvas").css({display: "block"})
      })
    }, [])

    return (
        <div>
            <ContactUs style={{marginTop: "50px"}}/>
            <MessageUs />
            <FootSection />
        </div>
    )
}
