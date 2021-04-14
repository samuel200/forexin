import React, { useEffect } from 'react';
import $ from 'jquery';
import FootSection from '../FootSection/FootSection';
import InvestmentSection from '../InvestmentPlan.jsx/InvestmentSection';

export default function InvestmentPage() {
    useEffect(()=>{
        
        $('.page-holder').on("load", ()=>{
        $("#navigation-bar").css({display: "flex"})
        $("#to-top").css({display: "block"})
        $("canvas").css({display: "block"})
      })
    }, [])
    return (
        <div>
            <InvestmentSection />
            <FootSection style={{margin: "0px"}}/>
        </div>
    )
}
