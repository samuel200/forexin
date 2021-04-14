import React, { useEffect } from 'react';
import $ from 'jquery';
import  AboutUs from "../AboutUs/AboutUs";
import Services from '../OurServices/Services';
import AssetDistribution from '../AssetDistribution/AssetDistribution';
import FootSection from '../FootSection/FootSection';

export default function AboutPage() {
    useEffect(()=>{
        
        $('.page-holder').on("load", ()=>{
        $("#navigation-bar").css({display: "flex"})
        $("#to-top").css({display: "block"})
        $("canvas").css({display: "block"})
      })
    }, [])
    
    return (
        <div>
            <AboutUs style={{ marginTop: "50px", zIndex: -1}}/>
            <Services />
            <AssetDistribution />
            <FootSection />
        </div>
    )
}
