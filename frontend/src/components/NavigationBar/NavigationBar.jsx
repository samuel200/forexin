import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import NavigationItem from './NavigatonItem';


export default function NavigationBar({ style }) {
    const [ down, setPos ] = useState(false);
    const navList = [
        { name: "home" , to: "/"},
        { name: "about us" , to: "/about"},
        { name: "investments" , to: "/investments"},
        { name: "faq" , to: "/faq"},
        { name: "contact us" , to: "/contact_us"},
        { name: "account" , to: "", 
            subLinks:[{ name: "Login", to: "/signin" }, { name: "Register", to: "/signup" }]},
    ]

    const changePos = value =>{
        setPos(value);
    }

    return (
        <nav id="navigation-bar" style={ style }>
            <div id="logo-holder">
            <Link to='/'>
                <header>
                    <img src={ require("../../img/logo-dark.png")} alt="logo" id="navigation-logo"/>
                    <h2>GLOBALTRADES</h2>
                </header>
            </Link>
            <span className="hide-on-large-only" onClick={ ()=>{
                changePos(!down);
            }}><img src={ require("../../img/menu.png")} alt="menu"/></span>
            </div>
            <div id="link-section" style={{
                ...(down ? {animation: ".5s ease-in forwards slidedown"}:{animation: ".5s ease-in forwards slideup"})
            }}>
                {
                    navList.map( link =>( <NavigationItem name={ link.name }
                                                      to={ link.to }
                                                      subLinks={ link.subLinks }
                                                      changePos={ changePos }/>))
                }
            </div>
        </nav>
    )
}
