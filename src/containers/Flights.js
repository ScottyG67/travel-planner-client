import React from 'react'

import Flight from '../components/Flight'

export default class Flights extends React.Component {
    state = {
        flights: [],
        dictionary:[],
        searchRequest:[{hi:"hello"}]
    }

    componentDidMount() {
        //server fetch
        // fetch("http://localhost:3000/api/v1/flight_searches/").then(res=>res.json()).then(flights => this.setState({flights: flights.data}))
        // this.searchFlights()
        //development fetch
        fetch("http://localhost:3000/data").then(res=>res.json()).then(flights => this.setState({flights: flights}))
        fetch("http://localhost:3000/dictionaries").then(res=>res.json()).then(dictionary => this.setState({dictionary: dictionary}))
    }

    searchFlights = () => {
        fetch("http://localhost:3000/api/v1/search_flights",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            }, 
            body: JSON.stringify({
              searchTerm: this.state.searchRequest
            })
          })
            .then( resp => resp.json() )
            .then( resp => this.setState( { flights: resp.data } ) )
    }
    
    render() {
        return (
            <div>
                <h1>Flights from X to Y</h1>
                <div className="ui four column grid">
                    <div className="row">
                        {this.state.flights.map(flight => <Flight key={flight.id} flight={flight}/>)}
                    </div>
                </div>
            </div>
        )
    }
}