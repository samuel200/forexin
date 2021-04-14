import React, { useEffect } from 'react';
import $ from 'jquery';
import Signin from '../Authentication/Signin'
import FootSection from '../FootSection/FootSection'

export default function SigninPage({ authenticated, setAuthenticationToken, setAuthenticated }) {
    useEffect(()=>{
        $('.page-holder').on("load", ()=>{
        $("#navigation-bar").css({display: "flex"})
        $("#to-top").css({display: "block"})
        $("canvas").css({display: "block"})
      })
    }, [])

    return (
        <div>
            <Signin authenticated={ authenticated } 
                        setAuthenticated={ setAuthenticated }
                        setAuthenticationToken={ setAuthenticationToken }/>
            <FootSection style={{ margin: "0px"}}/>
        </div>
    )
}
