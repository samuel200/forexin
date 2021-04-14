import React, {Fragment} from 'react';
import $ from 'jquery';
import domainName from '../../domainName';

export default function SideBarItem({ id, iconLink, name, changePage, setAuthenticatedUserData, setAuthenticated }) {
    const onClick = e =>{
        changePage(`${id+1}`);
        $(".active-side-bar-item").removeClass('active-side-bar-item');
        console.log(e)
        $(e.target).parent().addClass('active-side-bar-item')
    }
    const logout = ()=>{
        $("#navigation-bar").css({display: "flex"});
        $("#to-top").css({display: "block"});
        $("canvas").css({display: "block"});
        localStorage.removeItem('authenticatedUser');
        localStorage.removeItem('authenticationToken')
        setAuthenticated(false);
        window.location.href = `${domainName}/logout`;
    }

    return (
        <Fragment>
            <div className={`side-bar-item ${ name.toLowerCase() === "dashboard" ? "active-side-bar-item": "" } hide-on-large-only`} 
                    onClick={ name.toLowerCase() === "logout" ? logout : e =>{
                        onClick(e);
                    }}>
                <img src={ iconLink } alt={ name }/>
                <p>{ name }</p>
            </div>
            <div className={`side-bar-item ${ name.toLowerCase() === "dashboard" ? "active-side-bar-item": "" } hide-on-med-and-down`} 
                    onClick={ name.toLowerCase() === "logout" ? logout : onClick }>
                <img src={ iconLink } alt={ name }/>
                <p>{ name }</p>
            </div>
        </Fragment>
    )
}
