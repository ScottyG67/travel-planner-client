import { useState } from "react"
import React from 'react'

const FlightCard = ({ flight,changeBooking,trips,btnTxt }) => {

    // Work on functions like flight path to clean up what's happening below...
        // Start with different  functions for outgoing and incoming.
    const flightPath = (f, i) => {
        const base = f.itineraries[i].segments
        // return `${base[0].departure.iataCode} --> ${base[base.length - 1].arrival.iataCode}`
        return `${f.itineraries[i].segments[0].departure.iataCode} --> ${f.itineraries[i].segments[f.itineraries[i].segments.length - 1].arrival.iataCode}`
    }
    
    const [showTrips,setShowTrips] = useState(false)

    const timeConverter = (str) => {
        let timeBreaks = str.split(':')
        let hours = timeBreaks[0]
        let minutes = timeBreaks[1]

        let newTime = ''

        if(parseInt(hours) < 12){
            if(hours === "00") {
                hours = '12'
            }

            newTime = `${hours}:${minutes} AM`
        } else {
            if(hours !== "12"){
                hours = parseInt(hours) - 12
            }

            newTime = `${hours}:${minutes} PM`
        }

        return newTime
    }

    const handleClick = () => {
        if(btnTxt === 'Book Now!'){
            setShowTrips(!showTrips)
        } else {
            changeBooking(flight.id)
        }
    }

    const handleSelect = (e) => {
        
        changeBooking(flight,e.target.value)
    }

    return (
        <div className="col-sm-12">
            <div className="card" style={{marginTop: ".5rem", color: "black"}}>
                <div className="card-body">
                    <h5 className="card-title">{`$${flight.price.total}`}</h5>
                    <hr />
                    <p className="card-text">{`${flight.itineraries[0].segments[0].departure.iataCode} --> ${flight.itineraries[0].segments[flight.itineraries[0].segments.length - 1].arrival.iataCode}`}</p>
                    {/* <p className="card-text">{flightPath(flight, 0)}</p> */}
                    <p className="card-text">{`${flight.itineraries[0].segments[0].departure.at.split("T")[0]} @ ${timeConverter(flight.itineraries[0].segments[0].departure.at.split("T")[1])}`}</p>
                    <hr />
                    <p className="card-text">{`${flight.itineraries[1].segments[0].departure.iataCode} --> ${flight.itineraries[1].segments[flight.itineraries[1].segments.length - 1].arrival.iataCode}`}</p>
                    {/* <p className="card-text">{flightPath(flight, 1)}</p> */}
                    <p className="card-text">{`${flight.itineraries[1].segments[0].departure.at.split("T")[0]} @ ${timeConverter(flight.itineraries[1].segments[0].departure.at.split("T")[1])}`}</p>
                    { !showTrips ? <button type="button" onClick={() => handleClick()} className="btn btn-primary">{btnTxt}</button> : null }
                    { showTrips ? 
                        <select onChange={handleSelect}>
                            <option value="none">Pick a Trip</option>
                            {trips.length > 0 ? trips.map(trip => <option value={trip.id}>{trip.name}</option>) : null }
                            <option value="new">Make New Trip</option>
                        </select>
                        :
                        null
                    }
                </div>
            </div>
        </div>
    )

}

export default FlightCard