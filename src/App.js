//React stuff
import React from 'react'
import { useEffect, useState } from "react"
import { 
  BrowserRouter as Router, 
  Route, 
  Redirect,
  Switch
} from 'react-router-dom';

//formatting
import './App.css';

//Components and Containers
import LoginPage from './containers/LoginPage'
import Main from './containers/Main'
import NavBar from './components/NavBar'
import FlightPage from './containers/FlightPage' 
import About from './components/About'

function App() {

  const [currentUserData, setCurrentUserData] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)


  // check if user is still logged in on initial page load
  useEffect( () => {
    const token = localStorage.getItem("token")
    if(token) {
      //query server to see if token still valid
      fetch('http://localhost:3000/api/v1/profile', {
        method: "GET",
        headers: {Authorization: `Bearer ${token}`}
      }).then(res => res.json())
        .then(profData => {
          if(!profData.message){
            //login if server response it good
            setCurrentUserData(profData)
            setLoggedIn(true)
            localStorage.setItem('loggedIn',true)
            localStorage.setItem("id",profData["id"])
          } else {
            //clear data is server response is bad
            logout()
          }
        })
    }

  }, [])


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
        localStorage.setItem("token",data.jwt)
        profileFetch() 
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
        localStorage.setItem("token",data.jwt)
        profileFetch() })
    e.target.reset()
  }

  // get user info from server
  const profileFetch = () => {
    const token = localStorage.getItem("token")
    fetch('http://localhost:3000/api/v1/profile', {
      method: "GET",
      headers: {Authorization: `Bearer ${token}`}
    }).then(res => res.json())
      .then(profData => {
        if(!profData.message){
          setCurrentUserData(profData)
          setLoggedIn(true)
          localStorage.setItem('loggedIn',true)
          localStorage.setItem("id",profData["id"])
        } else {
          setLoggedIn(false)
          localStorage.setItem('loggedIn',false)
          alert('incorrect username or password')
        }
      })
  }

  const logout = () => {
    setCurrentUserData(null)
    setLoggedIn(false)
    localStorage.removeItem('id')
    localStorage.removeItem('token')
    localStorage.removeItem('loggedIn')
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar logoutAction={logout} />
        
      </header>

      <div className="App-body">
      <Router>
          <Switch>
            <Route exact path ='/'>
              {loggedIn? <Main currentUser={currentUserData} />:<Redirect to='/login' />}
            </Route>
            <Route path ='/login'>
              {loggedIn? <Redirect to='/' /> : <LoginPage handleLogin={login} handleSignUp={signup} />}
            </Route>
            <Route path ='/signup'>
              <LoginPage handleLogin={login} handleSignUp={signup} />
            </Route>
            <Route path ='/trips'>
              
            </Route>
            <Route path ='/flights'>
              <div className= 'flight-page' >
                <FlightPage />
              </div>
            </Route>
            <Route path ='/about'>
              <About />
            </Route>

          </Switch>
        </Router>
      {/* {loggedIn? <Main currentUser={currentUserData} /> : <LoginPage handleLogin={login} handleSignUp={signup} />} */}
      </div>
      
    </div>
  );
}

export default App;
