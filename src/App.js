import React, { useState } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import {withRouter} from 'react-router'
import './App.css';

import MainContainer from './containers/MainContainer';

// import Login from '../components/Login'
// import SignUp from '../components/SignUp'


import LoginPage from './containers/LoginPage'
import Main from './containers/Main'

function App() {

  const [currentUserData, setCurrentUserData] = useState(null)

  let history = useHistory()

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
      .then(data => { profileFetch(data) })

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
        profileFetch(data)

      })
    e.target.reset()
  }

  // get auth token and user info from server
  const profileFetch = (data) => {

    localStorage.setItem("token",data.jwt)

    fetch('http://localhost:3000/api/v1/profile', {
      method: "GET",
      headers: {Authorization: `Bearer ${data.jwt}`}
    }).then(res => res.json())
      .then(profData => {
        setCurrentUserData(profData)
        localStorage.setItem("id",profData["id"])
        console.log(profData)
      })
  }



  return (
    <div>
      
      <Router>
        <Switch>
          <Route exact path='/' >
            <Main currentUser={currentUserData} />
          </Route>
          <Route exact path='/login' >
            <LoginPage profileFetch={profileFetch} />
            {/* <LoginPage handleLogin={login} handleSignUp={signup} /> */}
          </Route>
          <Route exact path='/trips' >
            {localStorage.getItem('token')?<MainContainer />:<Redirect to='/login' />}
          </Route>


          <Route>
            <Redirect to='/' />
          </Route>
        </Switch>
      </Router>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     {currentUserData && !currentUserData.message ? <Main currentUser={currentUserData} /> : <LoginPage handleLogin={login} handleSignUp={signup} />}
    //     <MainContainer />
    //   </header>
    // </div>
  );
}

export default App;
