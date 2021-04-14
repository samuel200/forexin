import React from 'react';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import $ from 'jquery';
import domainName from '../../domainName';

export default function MessageUs() {
    const [ ref, inView ] = useInView({
        threshold: .5,
        triggerOnce: true
    })
    
    const startingStyle= {
        position: "relative",
        top: "60px",
        opacity: .1,
        transition: ".8s all",
        ...(inView ? 
            {
                top: "0px",
                opacity: 1
            }:{})
    }

    const sendMessage = e =>{
        e.preventDefault();
        // Get parent DIV
        const parent = $(e.target).parent();
        
        // Get Name and Email Input
        const [ nameHolder, emailHolder ] = parent.find('input');
        const [ name, email ] = [ nameHolder.value, emailHolder.value ]

        // Get Message to be sent
        const message = parent.find("textarea").val();
        
        axios.post(`${ domainName }/message_us/`, {
            name,
            email,
            message
        }).then( data =>{
            alert('Message Sent')
            nameHolder.value = emailHolder.value = "";
            parent.find("textarea").val("");
        }).catch( error=>{
            alert("Error Occured While Sending Message")
        })
        
    }

    return (
        <form onSubmit={ sendMessage }>
            <section id="message-us" ref={ ref }>
                <h2 className="heading">message us</h2>
                <div id="input-holder" style={{ ...startingStyle, transitionDelay: ".2s" }}>
                    <input type="text" placeholder="your name*" required/>
                    <input type="email" placeholder="email address*" required/>
                </div>
                <textarea placeholder="your message*" rows="8" style={{ ...startingStyle, transitionDelay: ".4s" }} required></textarea>
                <button style={{ ...startingStyle, transitionDelay: ".6s" }} type="submit">send message</button>

            </section>
        </form>
    )
}
