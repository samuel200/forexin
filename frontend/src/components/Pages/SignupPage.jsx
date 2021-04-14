import React, { useEffect } from 'react';
import $ from 'jquery';
import Signup from '../Authentication/Signup'
import FootSection from '../FootSection/FootSection'

export default function SingupPage() {
    useEffect(()=>{
        
        $('.page-holder').on("load", ()=>{
        $("#navigation-bar").css({display: "flex"})
        $("#to-top").css({display: "block"})
        $("canvas").css({display: "block"})
      })
    }, [])
    return (
        <div>
            <Signup />
            <FootSection style={{ margin: "0px"}}/>
        </div>
    )
}
