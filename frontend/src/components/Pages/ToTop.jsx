import React, { useEffect } from 'react';
import $ from 'jquery';
import { Link } from 'react-scroll';


export default function ToTop() {
    useEffect(()=>{
        
        $('.page-holder').on("load", ()=>{
        $("#navigation-bar").css({display: "flex"})
        $("#to-top").css({display: "block"})
        $("canvas").css({display: "block"})
      })
    }, [])

    const divStyle ={
        width: "45px",
        height: "45px",
        padding: "10px",
        borderRadius: "5px",
        background: "#7C2CEA",
        cursor: "pointer",
        position: "fixed",
        bottom: "120px",
        right: "30px",
        textAlign: "center",
        boxShadow: "1px 2px 5px #26164D",
        zIndex: 5
    }

    const imgStyle ={
        width: "24px",
        height: "24px"
    }

    return (
        <Link activeClass="hide" to="navigation-bar" spy={ true } smooth={ true } duration={ 500 } >
            <div id="to-top" style={ divStyle }>
                <img src={ require("../../img/up-arrow.png")} alt="up-arrow" style={ imgStyle }/>
            </div>
        </Link>
    )
}
