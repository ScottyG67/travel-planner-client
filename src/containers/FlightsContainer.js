import React from 'react'

import FlightCard from '../components/FlightCard'

export default class Flights extends React.Component {
    
    // Fix/Delete this?
    state = {
        flights: [],
        dictionary:[],
        searchRequest:[],
        trips:[]
    }

    // Fix/Delete this?
    clearState = () => {
        this.setState({
            flights: [],
            dictionary:[],
            searchRequest:[],
            trips:[]
        })
    }

    // Fix/Delete this?
    componentDidMount() {
        this.searchFlights() // populate flights state
        this.getTrips() // populate trips state
    }

    // Fix/Delete this?
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
            // Fix this?
            .then( resp => this.setState( { flights: resp.data } ) )
        
        // Fix this?
        this.setState({searchRequest: this.props.searchRequest})
    }

    getTrips = () => {

        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('id')

        const reqObj = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            } 
        }

        fetch(`http://localhost:3000/api/v1/users/${userId}/trips`,reqObj)
            .then( resp => resp.json() )
            .then( respTrips => {
                this.setState({trips:respTrips})
            })

    }

    saveFlight = (flight,tripId) => {
        
        //newTrip is fetch so need to get tripId assignment to wait for it to complete
        if(tripId === "new"){
            this.newTrip()
            tripId = this.state.trips.slice(-1)[0].id
        }
        
        
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

        fetch(`http://localhost:3000/api/v1/users/${userId}/flights`,reqObj)
            .then( resp => resp.json() )
            .then( _=>{
                alert('flight saved')
                // this.setState( { flights: [] } )
                // this.setState({dictionary:[]}) 
                // this.setState({searchRequest:[]}) 
                // this.setState({trips:[]})     
            }) // add Routing to Trip Details
            
    }

    newTrip = () => {
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('id')

        const trip = {
            name: "New Trip",
            description: "This is going to be amazing!",
            user_id: userId,
            image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80'
        }
        const reqObj = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(trip)
        }

        fetch(`http://localhost:3000/api/v1/users/${userId}/trips`,reqObj)
            .then( resp => resp.json() )
            .then(respTrip => {
                this.setState(prevState => {return{trips: [...prevState.trips,respTrip]}})
            })

    }
    
    render() {
        return (
            <div>
                <h2 style={{marginTop: "2rem"}}>Results</h2>
                <div className="row overflow-auto" style={{marginTop: ".5rem", height: "25rem"}}>
                    {this.props.flights && this.props.flights !== [] ? this.props.flights.map(flight => <FlightCard key={flight.id} flight={flight} btnTxt={"Book Now!"} trips={this.state.trips} changeBooking={this.saveFlight} flightDetails={this.props.flightDetails} />) : null}
                </div>
            </div>
        )
    }
}