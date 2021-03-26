import React, { useState } from 'react'

//Components
import Login from '../components/Login'
import SignUp from '../components/SignUp'

function LoginPage() {
    
    return (
        <div className="container">
            <Login />
            <SignUp />
        </div>
    )

}

export default LoginPage