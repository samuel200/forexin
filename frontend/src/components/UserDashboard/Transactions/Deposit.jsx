import React, { useEffect, useRef, useState } from 'react'
import DepositForm from '../AccountOverview/DepositForm'
import DepositTransactionTable from '../AccountOverview/DepostiTransactionTable'


export default function Deposit({ authenticatedUser, authenticationToken, setAuthenticatedUser }) {
    let modal = useRef();
    const [wallet, setWallet] = useState();
    useEffect(() => {
        var instances = window.M.Modal.init(modal.current, {});
        setWallet(authenticatedUser.site_wallet);
    }, [])
    return (
        <div className="withdraw-section">
            <h2>Deposit Funds</h2>
            <div className="transaction-holder">
                <DepositForm authenticatedUser={authenticatedUser} authenticationToken={authenticationToken} setAuthenticatedUser={setAuthenticatedUser} modal={ modal }/>
                <DepositTransactionTable authenticatedUser={authenticatedUser} />
            </div>

            {/* <!-- Modal Structure --> */}
            <div id="modal1" className="modal" ref={modal}>
                <div className="modal-content">
                    <h4 className="black-text">Make Deposit</h4>
                    <p className="black-text">Make Payment to the address provided below and send the proof of payment to our online representative for confirmation of payment.</p>
                    <p className="black-text">Bitcoin Address: <strong>{ wallet }</strong></p>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
                </div>
            </div>
        </div>
    )
}
