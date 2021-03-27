import React from 'react'

//Components
import Login from '../components/Login'
import SignUp from '../components/SignUp'

function LoginPage() {
    
    return (
        <div className="container">
            <div className="row">
                <Login />
                <SignUp />
            </div>
        </div>
    )

}

export default LoginPage