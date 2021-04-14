import React from 'react'
import WithdrawalTransactionTable from '../AccountOverview/WithdrawalTransactionTable'
import WithdrawalForm from '../AccountOverview/WithdrawalForm'

export default function Withdraw({ authenticatedUser, authenticationToken, setAuthenticatedUser }) {
    return (
        <div  className="withdraw-section">
            <h2>Withdraw Funds</h2>
            <div className="transaction-holder">
                <WithdrawalForm authenticatedUser={ authenticatedUser } authenticationToken={ authenticationToken } setAuthenticatedUser={ setAuthenticatedUser }/>
                <WithdrawalTransactionTable authenticatedUser={ authenticatedUser }/>
            </div>
        </div>
    )
}
