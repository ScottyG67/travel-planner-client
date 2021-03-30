import React from 'react'

import Flight from '../components/Flight'
import FlightCard from '../components/FlightCard'
import DestinationTitleBar from '../components/DestinationTitleBar'

export default class Flights extends React.Component {
    state = {
        flights: [],
        dictionary:[],
        searchRequest:[]
    }

    componentDidMount() {
        this.searchFlights()

        //frontend json db fetch
        // fetch("http://localhost:3000/data").then(res=>res.json()).then(flights => this.setState({flights: flights}))
        // fetch("http://localhost:3000/dictionaries").then(res=>res.json()).then(dictionary => this.setState({dictionary: dictionary}))
    }

    searchFlights = () => {

        const token = localStorage.getItem('token')
        const reqObj = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            }, 
            body: JSON.stringify({searchTerm: this.props.searchRequest})
        }

        fetch("http://localhost:3000/api/v1/search_flights",reqObj)
            .then( resp => resp.json() )
            .then( resp => this.setState( { flights: resp.data } ) )

        this.setState({searchRequest: this.props.searchRequest})
    }

    saveFlight(flight,tripId) {
        // debugger
        const userId= localStorage.getItem('id')
        const token = localStorage.getItem('token')
        const reqObj = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            }, 
            body: JSON.stringify({flight:flight,trip:tripId})
        }

        fetch(`http://localhost:3000/api/v1/users/${userId}/saveflight`,reqObj)
            .then( resp => resp.json() )
            .then( alert('flight saved'))
        
    }
    
    render() {
        return (
            <div>
                <h2 style={{marginTop: "2rem"}}>Results</h2>
                <div className="row overflow-auto" style={{marginTop: ".5rem", height: "20rem"}}>
                    {this.state.flights !== [] ? this.state.flights.map(flight => <FlightCard key={flight.id} flight={flight} />) : null}
                </div>
            </div>
        )
    }
}