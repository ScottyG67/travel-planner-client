import React from 'react'

//Components
import Login from '../components/Login'
import SignUp from '../components/SignUp'

function LoginPage(props) {
    
    return (
        <div style={{ marginTop: "6rem" }} className="container">
            <div className="row">
                <Login handleLogin={props.handleLogin} />
                <SignUp handleSignUp={props.handleSignUp} />
            </div>
        </div>
    )

}

export default LoginPage