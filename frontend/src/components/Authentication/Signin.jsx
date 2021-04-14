import React from 'react'
import SigninIllustration from './SigninIllustration'
import SigninForm from './SigninForm'

export default function Signin({ authenticated, setAuthenticationToken, setAuthenticated}) {
    return (
        <div id="signin-section">
            <SigninIllustration />
            <SigninForm authenticated={ authenticated } 
                        setAuthenticated={ setAuthenticated }
                        setAuthenticationToken={ setAuthenticationToken }/>
        </div>
    )
}
