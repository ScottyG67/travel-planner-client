import React, { useState } from 'react'
import MainContainer from './containers/MainContainer';
import './App.css';

import LoginPage from './containers/LoginPage'
import Main from './containers/Main'

function App() {

  const [currentUserData, setCurrentUserData] = useState(null)

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
      .then(data => { localStorage.setItem("token",data.jwt)
        fetch('http://localhost:3000/api/v1/profile', {
          method: "GET",
          headers: {Authorization: `Bearer ${data.jwt}`}
        }).then(res => res.json())
          .then(profData => {
            setCurrentUserData(profData)
            console.log(profData)
          })
      }
      )

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
        fetch('http://localhost:3000/api/v1/profile', {
          method: "GET",
          headers: {Authorization: `Bearer ${data.jwt}`}
        }).then(res => res.json())
          .then(profData => {
            setCurrentUserData(profData)
            console.log(profData)
          })
      })
    
    e.target.reset()
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Travel Planner</h1>
        {currentUserData && !currentUserData.message ? <Main currentUser={currentUserData} /> : <LoginPage handleLogin={login} handleSignUp={signup} />}
        {/* <MainContainer /> */}
      </header>
    </div>
  );
}

export default App;
