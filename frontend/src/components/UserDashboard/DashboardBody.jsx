import React, { Fragment } from 'react';
import $ from 'jquery';
import CustomerSupport from './CustomerSupport/CustomerSupport';
import DashboardFooter from './DashboardFooter';
import DashboardSection from './DashboardSection/DashboardSection';
import InvestmentSection from '../InvestmentPlan.jsx/InvestmentSection';
import AccountOverview from './AccountOverview/AccountOverview';
import Withdraw from './Transactions/Withdraw';
import Deposit from './Transactions/Deposit';
import Profile from './ProfileSection/Profile';

export default function DashboardBody({ currentPage, changePage, authenticatedUser, setAuthenticatedUser, authenticationToken }){
    let page;

    switch(currentPage){
        case "1":
            page = <DashboardSection />
            break;

        case "2":
            page = <Profile authenticatedUser={ authenticatedUser } setAuthenticatedUser={ setAuthenticatedUser }/>
            break;

        case "3":
            page = <AccountOverview authenticatedUser={ authenticatedUser } setAuthenticatedUser={ setAuthenticatedUser }/>
            break;

        case "4":
            page = (
                <div>
                    <InvestmentSection style={{background: "none", margin: "0px"}} 
                                       investmentItemStyle={{width: "calc((100%/3) - 80px)"}} 
                                       itemOnClick={ ()=> changePage("6") }/>
                    <div style={{ width: "90%", margin: "auto auto 40px auto"}}>
                        <buttonid id="contact-us-btn" onClick={ ()=> changePage("6") }>GetStarted </buttonid>
                    </div>
                </div>
                )
            break;

        case "5":
            page = <Withdraw authenticationToken={ authenticationToken } authenticatedUser={ authenticatedUser } setAuthenticatedUser={ setAuthenticatedUser }/>
            break;

        case "6":
            page = <Deposit authenticationToken={ authenticationToken } authenticatedUser={ authenticatedUser } setAuthenticatedUser={ setAuthenticatedUser }/>
            break;
        
        case "7":
            page = <CustomerSupport />
            break;
    }

    return(
        <Fragment>
            <div id="dashboard-body" className="hide-on-large-only" onClick={()=>{
                $("#side-bar").css({
                    maxHeight: "0px"
                }) 
            }}>
                { page }
                <DashboardFooter />
            </div>
            <div id="dashboard-body" className="hide-on-med-and-down">
                { page }
                <DashboardFooter />
            </div>
        </Fragment>
    )
}