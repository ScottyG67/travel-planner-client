import React from 'react'
// import { Nav } from 'react-bootstrap'

const NavBar = ({ logoutAction }) => {

    return (
        <nav style={{ width: "100%", backgroundColor: "#1b2021", height: "5rem", marginBottom: "1rem", position: "fixed", top: "0", zIndex: "0" }} className="navbar">
            <div className="container">
                <div style={{ width: "90%", display: "inline-block" }}>
                    <h2 style={{ display: "inline-block", marginLeft: ".5rem", marginRight: ".5rem" }}>Trip Viewer</h2>
                    <a className="router-option" href="/">Home</a>
                    <a className="router-option" href="/flights">Flights</a>
                    <a className="router-option" href="/trips">Trips</a>
                    <a className="router-option" href="/about">About</a>
                </div>
                <div style={{ width: "5%", display: "inline-block"}}>
                    <button onClick={() => logoutAction()} className="btn-sm btn-danger">Logout</button>
                </div>
            </div>
        </nav>
    )

}

export default NavBar