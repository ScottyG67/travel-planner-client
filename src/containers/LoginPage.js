import React from 'react'
import {withRouter} from 'react-router'

//Components
import Login from '../components/Login'
import SignUp from '../components/SignUp'

function LoginPage(props) {

    const login = (e) => {

        e.preventDefault()
    
        let reqObj = {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          method: "POST",
          body: JSON.stringify({
            user: {
            username: e.target.username.value,
            password: e.target.password.value
            }
          })
        }

        fetch('http://localhost:3000/api/v1/login', reqObj)
        .then(res => res.json())
        .then(data => { 
            props.profileFetch(data)
            // props.history.push('/trips')
        })
  
      e.target.reset()
    }

    const signup = (e) => {
        e.preventDefault()
    
        let reqObj = {
            headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
            },
            method: "POST",
            body: JSON.stringify({
            user: {
                first_name: e.target.first_name.value,
                last_name: e.target.last_name.value,
                username: e.target.username.value,
                password: e.target.password.value
            }
            })
        }

        fetch('http://localhost:3000/api/v1/users', reqObj)
        .then(res => res.json())
        .then(data => { 
          props.profileFetch(data)
        //   props.history.push('/trips')
        })
      e.target.reset()
    }
    
    return (
        <div className="container">
            <div className="row">
                <Login handleLogin={login} />
                <SignUp handleSignUp={signup} />
            </div>
        </div>
    )

}

// export default LoginPage
export default withRouter(LoginPage)