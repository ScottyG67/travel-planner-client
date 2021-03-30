import React, { useState } from 'react'

import FlightsContainer from './FlightsContainer'
// import SearchForm from '../components/SearchForm'
import FlightSearch from '../components/FlightSearch'

const Main = ({ currentUser }) => {

    // const [renderFlights, setRenderFlights] = useState(false)
    // const [searchRequest, setSearchRequest] = useState({})
    const [flightsList, setFlightsList] = useState(null)

    const searchFlights = (obj, updateFlights) => {
        const reqObj = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({searchTerm: obj})
        }

        fetch('http://localhost:3000/api/v1/search_flights', reqObj)
            .then(res => res.json())
            .then(resData => {
                updateFlights(resData.data)
            })
        // setSearchRequest(obj)
    }

    return (
        <div>
            <h1>{ `Hello, ${currentUser.first_name}!` }</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 prof-column">
                        <FlightSearch searchFlights={searchFlights} updateFlights={setFlightsList} />
                        {/* {flightsList ? <FlightsContainer searchFlights={searchFlights} updateFlights={setFlightsList} flights={flightsList} searchRequest={searchRequest} /> : null} */}
                        {flightsList ? <FlightsContainer searchFlights={searchFlights} updateFlights={setFlightsList} flights={flightsList} /> : null}
                    </div>
                    <div className="col-md-3 prof-column">
                        <h1>Photo Feed</h1>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Main