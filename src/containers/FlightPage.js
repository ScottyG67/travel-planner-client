import React from 'react'
import {useState,useEffect} from 'react'

import FlightsContainer from './FlightsContainer'
import FlightSearch from '../components/FlightSearch'

const FlightPage = () => {

        //Flights
        const [flightsList, setFlightsList] = useState(null)
        const [flightDetails, setFlightDetails] = useState(null)

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
                <FlightSearch searchFlights={searchFlights} updateFlights={setFlightsList} />
                {flightsList ? <FlightsContainer selectedFlight={flightDetails} changeSelectedFlight={setFlightDetails} searchFlights={searchFlights} updateFlights={setFlightsList} flights={flightsList} flightDetails={setFlightDetails} /> : null}
                {flightsList ? <button onClick={() => setFlightsList(null)} className='btn btn-danger'>Clear Results</button> : null }
            </div>
        )

}

export default FlightPage