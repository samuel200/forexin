import React, { useState } from 'react';
import $ from 'jquery';
import axios from 'axios';
import domainName from '../../../domainName';

export default function WithdrawalForm({ authenticatedUser, setAuthenticatedUser }) {
    const { email, account_balance } = authenticatedUser;
    const [ message, setMessage ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const [ isCryptoPayment, setIsCryptoPayment ] = useState(true);
    
    const showMessage = (type, message, val=1) =>{
        // let errorHolder;
        
        // if(val === 1){
        //     errorHolder = $(".message");
        // }else{
        //     errorHolder = $("#message");
        // }

        // if(type === "success"){
        //     if(val === 1){
        //         errorHolder.addClass(type)
        //     }else{
        //         errorHolder.addClass(type)
        //     }
        // }else if( type === "error"){
        //     if(val === 1){
        //         errorHolder.addClass(type)
        //     }else{
        //         errorHolder.addClass(type)
        //     }
        // }

        alert(message);
        // setMessage(message)
        // errorHolder.css({
        //     transition: ".5s ease-in opacity",
        //     opacity: 1
        // })

        // setTimeout(()=>{
        //     errorHolder.css({
        //         opacity: 0
        //     })
        // }, 2000)
    } 
    const createWithdrawRequest = e =>{
        e.preventDefault();
        setLoading(true);
        const method = $("select#exampleFormControlSelect1").val();
        const ammount = parseFloat($("input[name='ammount']").val());
        
        if(ammount > account_balance || account_balance === 0){
            showMessage('error', 'Request is more than account balance');
            setLoading(false);
        }else{
            axios({
                method: 'POST',
                url: `${domainName}/api/withdraw_request/`,
                data:  {
                    method,
                    ammount
                },
                headers: {
                    Authorization: `Token ${ authenticatedUser.token }`
                },
                json: true
            })
            .then( ({data})=>{
                setLoading(false);
                localStorage.setItem("authenticatedUser", JSON.stringify(data));
                setAuthenticatedUser(data);
                showMessage('success', 'Withdraw Request Made Successfully')
            })
            .catch( error=>{
                setLoading(false);
                showMessage('error', 'Error Occurred While Making Withdraw Request')
            })
        }
    }

    const handlePaymentChange = e =>{
        switch(e.target.value){
            case "bitcoin":
                setIsCryptoPayment(true);
                break
            
            case "litecoin":
                setIsCryptoPayment(true);
                break
            
            case "ethereum":
                setIsCryptoPayment(true);
                break
            
            default:
                setIsCryptoPayment(false);
        }
    }

    return (
        <div id="transaction-form-holder" className="transaction-item">
            <div id="message">{ message }</div>
            <h4>Withdrawal Form</h4>
            <form onSubmit={ createWithdrawRequest }>
                <div>
                    <label htmlFor="email">Your Email</label>
                    <input type="email" name="email" id="email" value={ email } placeholder="Your Email Address"/>
                </div>
                <div className={isCryptoPayment ? "" : "hide"}>
                    <label htmlFor="bitcoin-address">Wallet Address</label>
                    <input type="text" name="bitcoin-address" placeholder="Enter Wallet Address"/>
                </div>
                <div>
                    <label htmlFor="account-balance">Account Balance</label>
                    <input type="text" name="account-balance" value={`$${ authenticatedUser.account_balance }`}/>
                </div>
                <div>
                    <label htmlFor="ammount">Amount</label>
                    <input type="number" className="form-control is-valid" name="ammount" defaultValue={ 0 }/>
                    <div class="valid-feedback">
                        Make sure you have set your appropriate account details before making request
                    </div>
                </div>
                <div class="form-group">
                    <label htmlFor="exampleFormControlSelect1">Payment Method</label>
                    <select class="form-control" id="exampleFormControlSelect1" onChange={ handlePaymentChange }>
                        <option selected value="bitcoin">Bitcoin</option>
                    </select>
                </div>
                <button type="submit" disabled={ loading }>Make Withdrawal</button>
                <div style={{
                        textAlign: "center",
                        display: loading ? "block" : "none"
                    }}>
                        <img src={ require('../../../img/loading.svg')} alt="loading-animation" style={{transform: "scale(.4)"}}/>
                </div>
            </form>
        </div>
    )
}
