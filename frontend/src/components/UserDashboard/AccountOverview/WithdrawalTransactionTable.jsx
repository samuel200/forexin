import React from 'react'

export default function WithdrawalTransactionTable({ authenticatedUser }) {
    return (
        <div id="transaction-form-holder" className="transaction-item">
            <h3 style={{ fontSize: "1.1em"}}>Withdrawal History</h3>
            <div className="table-responsive">
                <table class="table table-striped transaction-table">
                    <thead>
                        <tr>
                            <th scope="col">Payment ID</th>
                            <th scope="col">Payment Method</th>
                            <th scope="col">Ammount</th>
                            <th scope="col">Date</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            authenticatedUser.withdrawals.length > 0 ?
                            authenticatedUser.withdrawals.map( withdrawal =>{
                                return(
                                    <tr>
                                        <th scope="row">{ withdrawal.id }</th>
                                        <td>{ withdrawal.method }</td>
                                        <td>{ withdrawal.ammount }</td>
                                        <td>{ withdrawal.date }</td>
                                        <td>{ withdrawal.active ? "CONFIRMED" : "@PENDING" }</td>
                                    </tr>
                                )
                            }):
                            <div>No Withdrawal Has Been Made</div>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
