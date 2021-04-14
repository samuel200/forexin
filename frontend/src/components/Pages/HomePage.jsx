import React, { useEffect } from 'react';
import $ from 'jquery';
import MainScreen from '../MainScreen/MainScreen';
import AboutUs from '../AboutUs/AboutUs';
import Services from '../OurServices/Services';
import AssetDistribution from '../AssetDistribution/AssetDistribution';
import ContactUs from '../ContactUs/ContactUs';
import MessageUs from '../MessageUs/MessageUs';
import FootSection from '../FootSection/FootSection';
import InvestmentSection from '../InvestmentPlan.jsx/InvestmentSection';
import FAQSection from '../FAQ/FAQSection';

export default function HomePage() {
    useEffect(()=>{
        
        $('.page-holder').on("load", ()=>{
        $("#navigation-bar").css({display: "flex"})
        $("#to-top").css({display: "block"})
        $("canvas").css({display: "block"})
      })
    }, [])
    return (
        <div>
            <MainScreen />
            <AboutUs />
            <Services />
            <AssetDistribution />
            <InvestmentSection />
            <FAQSection />
            <ContactUs />
            <MessageUs />
            <FootSection />
        </div>
    )
}
