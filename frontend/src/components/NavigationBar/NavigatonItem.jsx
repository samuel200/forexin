import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavigatonItem({ name, to, subLinks, changePos}) {
    return subLinks ? (
        <div className="sublink-holder">
            <div class="main-link">
                <span>{ name }</span>
                <img src={ require("../../img/angle-arrow-down.svg") } alt="angle-down"/>
            </div>
            <div className="sublink">
                {
                    subLinks.map(link=> <NavLink to={ link.to } onClick={ ()=>{changePos(false)}} ><img src={require(`../../img/${link.name.toLowerCase()}.png`)} alt={ link.name+"_icon" }/>{ link.name }</NavLink>)
                }
            </div>
        </div>
    ): (
        <NavLink to={ to } onClick={ ()=>{
            changePos(false);
        }} className="nav-item">{ name }</NavLink>
    )
}
