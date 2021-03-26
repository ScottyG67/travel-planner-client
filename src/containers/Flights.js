import React from 'react'

import Flight from '../components/Flight'

export default class Flights extends React.Component {
    state = {
        flights: []
    }

    componentDidMount() {
        //server fetch
        // fetch("http://localhost:3000/api/v1/flight_searches/").then(res=>res.json()).then(flights => this.setState({flights: flights.data}))

        //development fetch
        fetch("http://localhost:3000/data").then(res=>res.json()).then(flights => this.setState({flights: flights}))
    }
    
    render() {
        return (
            <div>
                <h1>Flights</h1>
                {this.state.flights.map(flight => <Flight key={flight.id} flight={flight}/>)}
            </div>
        )
    }
}