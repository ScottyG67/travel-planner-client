import React from 'react'
// import { Nav } from 'react-bootstrap'

const NavBar = ({ logoutAction }) => {

    return (
        <nav style={{ width: "100%", backgroundColor: "#1b2021", height: "5rem", marginBottom: "1rem", position: "fixed", top: "0", zIndex: "0" }} className="navbar">
            <div className="container">
                <div className="col" style={{ width: "80%", display: "inline-block" }}>
                    <h3 style={{ display: "inline-block", marginLeft: ".5rem", marginRight: ".5rem" }}>Trip Viewer</h3>
                    <a className="router-option" href="">Flights</a>
                    <a className="router-option" href="">Trips</a>
                    <a className="router-option" href="">About</a>
                </div>
                <div className="col" style={{ width: "10%", display: "inline-block"}}>
                    <button onClick={() => logoutAction()} className="btn-sm btn-danger">Logout</button>
                </div>
            </div>
        </nav>
    )

}

export default NavBar