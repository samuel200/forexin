import React, { useState } from 'react';
import $ from 'jquery';
import axios from 'axios';
import domainName from '../../../domainName';

export default function Profile({ authenticatedUser, setAuthenticatedUser}) {
    const { email, first_name, 
            last_name, phone_number, 
            country, referrals,
            bitcoin_address, username, 
            referral_earnings } = authenticatedUser;
            
    const [ message, setMessage ] = useState("");
    const [ loading2, setLoading2 ] = useState(false);
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

    const editAccountDetails = e =>{
        e.preventDefault();
        const form = $(e.target);
        let wallet_address = form.find('input#bank-name').val();
        setLoading2(true);
        axios.post(`${domainName}/api/change_account_details/`, {
            bitcoin_address: wallet_address
        },{
            headers:{
                Authorization: `Token ${ authenticatedUser.token }`
            }
        }).then(({ data })=>{
            showMessage("success", "Accout Details Updated Successfully", 0)
            setAuthenticatedUser({ ...data, token: authenticatedUser.token });
            setLoading2(false);
        }).catch( error=>{
            showMessage("error", "Error Occured When Updating Account Details", 0);
            setLoading2(false);
        })
        
    }

    const changePassword = e =>{
        e.preventDefault();
        const form = $(e.target);
        const [ oldPassword, newPassword, newPasswordConfirm ] = form.find('input');

        if(newPassword.value === "" || newPasswordConfirm.value === "" || oldPassword.value === ""){
            showMessage("error", "required fields are still empty", 1);
        }else if(newPassword.value !== newPasswordConfirm.value){
            showMessage("error", "passwords do not match", 1);
        }else if(!(newPassword.value.length >= 8 && /[a-zA-z]/g.test(newPassword.value) && /\d/g.test(newPassword.value))){
            showMessage("error", "password must have 8 characters of both letters and number", 1)
        }else if(oldPassword.value === newPassword.value){
            showMessage("error", "old and new passwords should not be the same", 1)
        }else{
            setLoading(true);

            axios.post(`${ domainName }/api/change_password/`, {
                password: oldPassword.value,
                new_password: newPassword.value
            }, {
                headers:{
                    Authorization: `Token ${ authenticatedUser.token }`
                }
            }).then(({ data })=>{
                const { error_message } = data;
                
                if(error_message){
                    showMessage("error", error_message, 1);
                }else{
                    showMessage("success", "Password Changed Successfully", 1)
                    oldPassword.value = "";
                    newPassword.value = "";
                    newPasswordConfirm.value = "";
                }
                setLoading(false);
            }).catch(error=>{
                showMessage("error", "an error occured, try again later", 1);
                setLoading(false);
            })
        }
    }

    return (
        <div id="profile-section">
            <h2>Profile Overview</h2>
            <div id="transaction-form-holder">
            <h3>PROFILE INFO</h3>
            <table className="table table-hover transaction-table profile-table hide-on-med-and-down">
                <tbody style={{textTransform: "capitalize"}}>
                    <tr>
                        <th scope="row">Full Name</th>
                        <td>{ first_name + " " + last_name }</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Email</th>
                        <td>{ email }</td>
                        <td></td>
                        <td></td>
                    </tr>
                    {/* <tr>
                        <th scope="row">Country</th>
                        <td>{ country }</td>
                        <td></td>
                        <td></td>
                    </tr> */}
                    <tr>
                        <th scope="row">Phone Number</th>
                        <td>{ phone_number }</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Referals</th>
                        <td>{ referrals }</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Referal Earning</th>
                        <td>${ referral_earnings }</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Referal Link</th>
                        <td style={{textTransform: "lowercase !important"}}><a href={ `${ domainName }/register/${ username }` }>{ `${ domainName }/register/${ username }` }</a></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            
            <table className="table table-hover transaction-table profile-table table-responsive hide-on-large-only">
                <tbody style={{textTransform: "capitalize"}}>
                    <tr>
                        <th scope="row">Full Name</th>
                        <td>{ first_name + " " + last_name }</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Email</th>
                        <td>{ email }</td>
                        <td></td>
                        <td></td>
                    </tr>
                    {/* <tr>
                        <th scope="row">Country</th>
                        <td>{ country }</td>
                        <td></td>
                        <td></td>
                    </tr> */}
                    <tr>
                        <th scope="row">Phone Number</th>
                        <td>{ phone_number }</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Referals</th>
                        <td>{ referrals }</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Referal Earning</th>
                        <td>${ referral_earnings }</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Referal Link</th>
                        <td style={{textTransform: "lowercase !important"}}><a href={ `${ domainName }/signup/${ username }` }>{ `${ domainName }/signup/${ username }` }</a></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
            <div className="table-responsive" id="transaction-form-holder">
            <div id="message">{ message }</div>
            <h3>ACCOUNT DETAILS</h3>
            <form method="post" action={`${domainName}/api/change_account_details/`} onSubmit={ editAccountDetails }>
            <table class="table table-hover transaction-table profile-table">
                    <tbody>
                        <tr>
                            <th scope="row">Bitcoin Wallet Address</th>
                            <td>
                                <div>
                                    <input type="text"  id="bank-name" placeholder="Bitcoin Wallet Address" defaultValue={ bitcoin_address ? bitcoin_address : "" }/>
                                </div>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>

                    </tbody>
            </table>
            <button type="submit" disabled={ loading2 }>Set Transaction Details</button>
            <div style={{
                        textAlign: "center",
                        display: loading2 ? "block" : "none"
                    }}>
                        <img src={ require('../../../img/loading.svg')} alt="loading-animation" style={{transform: "scale(.4)"}}/>
            </div>
            </form>
        </div>
        <div id="transaction-form-holder">
            <div id="message" className="message">{ message }</div>
            <h4>Change Password</h4>
            <form method="post" action={`${domainName}/api/change_password`} onSubmit={ changePassword }>
                <div>
                    <label htmlFor="email">current-password</label>
                    <input type="password" placeholder="Your Current Password"/>
                </div>
                <div>
                    <label for="ammount">New Password</label>
                    <input type="password" className="form-control is-valid"/>
                    <div class="valid-feedback">
                        password must be 8 characters and above [numbers and letters]
                    </div>
                </div>
                <div>
                    <label for="ammount">Confirm Password</label>
                    <input type="password" className="form-control is-valid"/>
                    <div class="valid-feedback">
                        confirm your new password
                    </div>
                </div>
                <button type="submit" disabled={ loading }>Change Password</button>
                <div style={{
                        textAlign: "center",
                        display: loading ? "block" : "none"
                    }}>
                        <img src={ require('../../../img/loading.svg')} alt="loading-animation" style={{transform: "scale(.4)"}}/>
                </div>
            </form>
        </div>
        </div>
    )
}
