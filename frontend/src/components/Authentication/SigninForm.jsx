import React, { useState } from 'react';
import $ from 'jquery';
import { Link, Redirect } from 'react-router-dom';
import domainName from '../../domainName'
import axios from 'axios';

export default function SigninForm({ authenticated, setAuthenticationToken, setAuthenticated }) {
    const [ message, setMessage ] = useState("");
    const [ loading, setLoading ] = useState(false);

    const checkIfReady = ()=>{
        let ready = true;
        $(".required").each(function(index){
            if($(this).val() === ""){
                ready = false;
                return;
            }
        })
        return ready;
    }

    const showMessage = (type, message) =>{
        const errorHolder = $("#message");

        if(type === "success"){
            errorHolder.attr('class', type)
        }else if( type === "error"){
            errorHolder.attr('class', type)
        }

        setMessage(message)
        errorHolder.css({
            animation: "4s ease-in message-display forwards"
        })
        setTimeout(()=>{
            errorHolder.css({
                animation: ""
            })
        }, 4000)
    } 

    const loginUser = e =>{
        e.preventDefault();
        setLoading(true);
        if(checkIfReady()){
            axios.post(`${ domainName }/login/`, {
                email: $(".form-side input[type='email']").val(),
                password: $(".form-side input[type='password']").val()
            }).then( ({ data })=>{
                // data = JSON.parse(data);
                setLoading(false);
                setAuthenticationToken(data.token);
                localStorage.setItem("authenticationToken", data.token);
                setAuthenticated(true);
            }).catch( (error) =>{
                setLoading(false);
                showMessage('error', "invalid email or password");
            })
        }else{
            showMessage('error', 'Required field is left empty');
            setLoading(false);
        }
    }

    return ( authenticated ? <Redirect to="/dashboard"/>:
        <div className="form-side">
            <form onSubmit={ loginUser }>
                <div id="message" >{ message }</div>
                <h2 className="heading">Login to your account</h2>
                <div>
                    <label htmlFor="email">Your Email</label>
                    <input type="email" className="required" name="email" id="email" placeholder="Your Email Address"/>
                </div>
                <div>
                    <label htmlFor="password">Your Password</label>
                    <input type="password" className="required" name="password" id="password" placeholder="Your Password"/>
                </div>
                <div>
                    <button className="btn" type="submit" disabled={ loading }>Sign in</button>
                </div>
                <div>
                    <p>Don't have an account? <Link to="/signup">Register now</Link></p>
                </div>
                <div style={{
                        textAlign: "center",
                        display: loading ? "block" : "none"
                    }}>
                        <img src={ require('../../img/loading.svg')} alt="loading-animation" style={{transform: "scale(.4)"}}/>
                </div>
            </form>
        </div>
    )
}
