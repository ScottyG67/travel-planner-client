import React from 'react'
import {useState,useEffect} from 'react'

import Trips from './Trips'
import FlightsContainer from './FlightsContainer'
import PhotosContainer from './PhotosContainer'
import FlightSearch from '../components/FlightSearch'
import userEvent from '@testing-library/user-event'
import NavBar from '../components/NavBar'

import FlightPage from './FlightPage'

const Main = ({ currentUser }) => {

    // const [searchRequest, setSearchRequest] = useState({})
    //Flights
    // const [flightsList, setFlightsList] = useState(null)
    // const [flightDetails, setFlightDetails] = useState(null)



    // const searchFlights = (obj, updateFlights) => {
    //     const reqObj = {
    //         method: "POST",
    //         headers: {
    //             Authorization: `Bearer ${localStorage.getItem('token')}`,
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body: JSON.stringify({searchTerm: obj})
    //     }

    //     fetch('http://localhost:3000/api/v1/search_flights', reqObj)
    //         .then(res => res.json())
    //         .then(resData => {
    //             updateFlights(resData.data)
    //         })
        // setSearchRequest(obj)
    // }

    return (
        <div style={{ marginTop: "6rem" }}>
            <h1>{ `Hello, ${currentUser.first_name}!` }</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Trips />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 prof-column">
                        <FlightPage />
                        {/* <FlightSearch searchFlights={searchFlights} updateFlights={setFlightsList} />
                        {flightsList ? <FlightsContainer selectedFlight={flightDetails} changeSelectedFlight={setFlightDetails} searchFlights={searchFlights} updateFlights={setFlightsList} flights={flightsList} flightDetails={setFlightDetails} /> : null}
                        {flightsList ? <button onClick={() => setFlightsList(null)} className='btn btn-danger'>Clear Results</button> : null } */}
                    </div>
                    <div className="col-md-3 prof-column">
                        <PhotosContainer />
                    </div>
                </div>
                <div className="row">
                    {/* {flightsList ? <FlightsContainer selectedFlight={flightDetails} changeSelectedFlight={setFlightDetails} searchFlights={searchFlights} updateFlights={setFlightsList} flights={flightsList} flightDetails={setFlightDetails} /> : null}
                    {flightsList ? <button onClick={() => setFlightsList(null)} className='btn btn-danger' style={{ width: "50%", marginLeft: "auto", marginRight: "auto", marginTop: ".5rem"}}>Clear Results</button> : null } */}
                </div>
            </div>
        </div>
    )

}

export default Main