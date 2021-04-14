import React from 'react';
import AccountBalanceSection from './AccountBalanceSection';
import WithdrawalForm from './WithdrawalForm';

import "./Account.css"
import DepositForm from './DepositForm';
import WithdrawalTransactionTable from './WithdrawalTransactionTable';
import DepositTransactionTable from './DepostiTransactionTable';

export default function AccountOverview({ authenticatedUser, setAuthenticatedUser }) {
    return (
        <section id="account-overview-section">
            <h2 style={{padding: "40px 50px"}}>Account Overview</h2>
            <AccountBalanceSection authenticatedUser={ authenticatedUser }/>
            <hr style={{borderColor: "#bbb"}}/>
            {/* <div id="transaction-section">
                <WithdrawalForm authenticatedUser={ authenticatedUser } setAuthenticatedUser={ setAuthenticatedUser }/>
                <DepositForm authenticatedUser={ authenticatedUser } setAuthenticatedUser={ setAuthenticatedUser }/>
            </div> */}
            <hr style={{borderColor: "#bbb"}}/>
            <div id="transaction-section">
                <WithdrawalTransactionTable authenticatedUser={ authenticatedUser }/>
                <DepositTransactionTable authenticatedUser={ authenticatedUser }/>
            </div>
        </section>
    )
}
