import React from 'react'

export default function DepositTransactionTable({ authenticatedUser }) {
    return (
        <div className="table-responsive transaction-item" id="transaction-form-holder">
            <h3>Deposit History</h3>
            <table class="table table-striped transaction-table">
                <thead>
                    <tr>
                        <th scope="col">Payment ID</th>
                        <th scope="col">Payment Method</th>
                        <th scope="col">Ammount</th>
                        <th scope="col">Status</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                {
                    authenticatedUser.deposits.length > 0 ?
                    authenticatedUser.deposits.map( deposit =>{
                        return(
                            <tr>
                                <th scope="row">{ deposit.id }</th>
                                <td>{ deposit.method }</td>
                                <td>{ deposit.ammount }</td>
                                <td>{ deposit.active ? "CONFIRMED" : "@PENDING" }</td>
                                <td>{ deposit.date }</td>
                            </tr>
                        )
                    }):
                    <div>No Deposit Has Been Made</div>
                }
                </tbody>
            </table>
        </div>
    )
}
