import React, { useState } from 'react';
import $ from 'jquery';
import axios from 'axios';
import domainName from '../../../domainName';

export default function DepositForm({ authenticatedUser, setAuthenticatedUser, modal }) {
    const { email } = authenticatedUser;
    const [ message, setMessage ] = useState("");
    const [ loading, setLoading ] = useState(false);
    
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

    const createDepositRequest = e =>{
        e.preventDefault();
        setLoading(true);
        axios({
            method: 'POST',
            url: `${domainName}/api/deposit_request/`,
            data:  {
                method: $("select#exampleFormControlSelect1").val(),
                ammount: parseFloat($(e.target).find("input[name='ammount']").val())
            },
            headers: {
                Authorization: `Token ${ authenticatedUser.token }`
            },
            json: true
        })
        .then( ({data})=>{
            setLoading(false);
            setAuthenticatedUser(data);
            localStorage.setItem('authenticatedUser', JSON.stringify(data))
            showMessage('success', 'Deposit Request Made Successfully')
            const modalInstance = window.M.Modal.getInstance(modal.current);

            setTimeout(()=>{
                modalInstance.open();
            }, 1000)
        })
        .catch( error=>{
            setLoading(false);
            showMessage('error', 'Error Occurred While Making Deposit Request')
        })
    }

    return (
        <div id="transaction-form-holder" className="transaction-item">
            <div id="message">{ message }</div>
            <h4>Deposit Form</h4>
            <form onSubmit={ createDepositRequest }>
                <div>
                    <label htmlFor="email">Your Email</label>
                    <input type="email" name="email" id="email" value={ email } placeholder="Your Email Address"/>
                </div>
                <div>
                    <label for="ammount">Amount</label>
                    <input type="number" className="form-control is-valid" name="ammount" required={ true }/>
                    <div class="valid-feedback">
                        Make sure you have set your appropriate account details before making request
                    </div>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlSelect1">Payment Method</label>
                    <select className="form-control" id="exampleFormControlSelect1" name="method"> 
                        <option value="bitcoin">Bitcoin</option>
                    </select>
                </div>
                <button type="submit" disabled={ loading }>Make Deposit</button>
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
