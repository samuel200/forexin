import React,{ Fragment } from 'react';
import SideBarItem from './SideBarItem';

export default function SideBar({ changePage, setAuthenticatedUserData, setAuthenticated, style }){
    const navigations = [
        {
            iconLink: require("./img/dashboard.svg"),
            name: "dashboard"
        },
        {
            iconLink: require("./img/user.svg"),
            name: "Profile"
        },
        {
            iconLink: require("./img/account.svg"),
            name: "Account Overview"
        },
        
        {
            iconLink: require("./img/analysis.svg"),
            name: "Plans"
        },
        {
            iconLink: require("./img/cheque.svg"),
            name: "Withdrawal"
        },
        {
            iconLink: require("./img/cheque.svg"),
            name: "Deposit"
        },
        {
            iconLink: require("./img/help.svg"),
            name: "Customer Support"
        },
        {
            iconLink: require("./img/icon.svg"),
            name: "Logout"
        },
    ]
    return(
        <Fragment>
            <div id="side-bar" className="hide-on-med-and-down" style={ style }>
                <h4>Menu</h4>
                {navigations.map( ({ iconLink, name }, id) => <SideBarItem id={ id } 
                                                                        changePage={ changePage } 
                                                                        iconLink={ iconLink } 
                                                                        setAuthenticatedUserData={ setAuthenticatedUserData }
                                                                        setAuthenticated={ setAuthenticated }
                                                                        name={ name }/>)}
            </div>
            <div id="side-bar" className="hide-on-large-only mobile-sidebar" style={ style }>
                <h4>Menu</h4>
                {navigations.map( ({ iconLink, name }, id) => <SideBarItem id={ id } 
                                                                        changePage={ changePage } 
                                                                        iconLink={ iconLink } 
                                                                        setAuthenticatedUserData={ setAuthenticatedUserData }
                                                                        setAuthenticated={ setAuthenticated }
                                                                        name={ name }/>)}
            </div>

        </Fragment>
    )
}