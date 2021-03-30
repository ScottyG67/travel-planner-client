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
        //server fetch
        // fetch("http://localhost:3000/api/v1/flight_searches/").then(res=>res.json()).then(flights => this.setState({flights: flights.data}))
        this.searchFlights()
        //development fetch
        // fetch("http://localhost:3000/data").then(res=>res.json()).then(flights => this.setState({flights: flights}))
        // fetch("http://localhost:3000/dictionaries").then(res=>res.json()).then(dictionary => this.setState({dictionary: dictionary}))
        
    }

    searchFlights = () => {
        const token = localStorage.getItem('token')
            fetch("http://localhost:3000/api/v1/search_flights",{
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }, 
                body: JSON.stringify({searchTerm: this.props.searchRequest})
            })
                .then( resp => resp.json() )
                .then( resp => this.setState( { flights: resp.data } ) )
        this.setState({searchRequest: this.props.searchRequest})
    }
    
    render() {
        return (
            <div className="row overflow-auto" style={{marginTop: "2rem", height: "20rem"}}>
                {/* <DestinationTitleBar searchRequest={this.state.searchRequest}/> */}
                {/* {this.state.flights !== []? <h1>Flights from {this.state.flights[0].itineraries[0].segments[0].departure} to {this.state.flights[0].itineraries[0].segments.slice(-1)[0].arrival}</h1>:null}
                <div className="ui four column grid">
                    <div className="row">
                        {this.state.flights.map(flight => <Flight key={flight.id} flight={flight}/>)}
                    </div>
                </div> */}

                {this.state.flights !== [] ? this.state.flights.map(flight => <FlightCard key={flight.id} flight={flight} />) : null}
            </div>
        )
    }
}