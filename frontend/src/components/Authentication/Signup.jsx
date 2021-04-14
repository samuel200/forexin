import React from 'react';
import SignupForm from './SignupForm';
import SigninIllustration from "./SigninIllustration";

export default function Signup({ username }){
    return(
        <div id="signin-section" style={{background: "#26164D", padding: "50px"}}>
            <SigninIllustration />
            <SignupForm username={ username }/>
        </div>
    )
}