import React, { useState } from 'react'

import FlightsContainer from './FlightsContainer'
import SearchForm from '../components/SearchForm'
import FlightSearch from '../components/FlightSearch'

const Main = ({ currentUser }) => {

    // const [renderFlights, setRenderFlights] = useState(false)
    const [searchRequest, setSearchRequest] = useState({})
    const [flightsList, setFlightsList] = useState(null)

    // const passSearch = (dateStart, dateEnd, locStart, locEnd) => {
    //     // setRenderFlights(false)
    //     setSearchRequest({startDate: dateStart, endDate: dateEnd, depart: locStart, arrive: locEnd})
    //     // setRenderFlights(true)
    // }

    // const searchObj = (e) => {
    //     return {
    //         startDate: departDate,
    //         endDate: returnDate,
    //         locStart: targ.depart_location.value,
    //         locEnd: targ.destination.value
    //     }
    // }

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
                console.log(resData)
                updateFlights(resData.data)
            })
        // setSearchRequest(obj)
    }

    // searchFlights = () => {
    //     const token = localStorage.getItem('token')
    //         fetch("http://localhost:3000/api/v1/search_flights",{
    //             method: "POST",
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //                 "Content-Type": "application/json",
    //                 "Accept": "application/json"
    //             }, 
    //             body: JSON.stringify({searchTerm: this.props.searchRequest})
    //         })
    //             .then( resp => resp.json() )
    //             .then( resp => this.setState( { flights: resp.data } ) )
    //     this.setState({searchRequest: this.props.searchRequest})
    // }

    // const searchFlights = () => {
    //     const reqObj = {
    //         method: "POST",
    //         headers: {
    //             Authorization: `Bearer ${localStorage.getItem('token')}`,
    //             "Content-Type": "application/json",
    //             Accept: "application/json"
    //         },
    //         body: JSON.stringify({searchTerm: searchRequest})
    //     }

    //     fetch('http://localhost:3000/api/v1/search_flights', reqObj)
    //         .then(res => res.json())
    //         .then(resData => {
    //             setFlightsList(resData.data)
    //         })
    //     setSearchRequest(searchRequest)
    // }

    return (
        <div>
            <h1>{ `Hello, ${currentUser.first_name}!` }</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 prof-column">
                        {/* <SearchForm passSearch={passSearch} /> */}
                        {/* <FlightSearch passSearch={passSearch} /> */}
                        <FlightSearch searchFlights={searchFlights} updateFlights={setFlightsList} />
                        {flightsList ? <FlightsContainer searchFlights={searchFlights} flights={flightsList} searchRequest={searchRequest} /> : null}
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