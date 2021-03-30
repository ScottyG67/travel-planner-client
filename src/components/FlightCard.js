import { useState } from "react"
import React from 'react'

const FlightCard = ({ flight,changeBooking,trips,btnTxt }) => {

    // const departDetails = flight.itineraries[0].segments[0]
    // const returnDetails = flight.itineraries[1].segments[0]
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
            hours = parseInt(hours) - 12

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
                    <div>
                        <h5 className="card-title">{`$${flight.price.total}`}</h5>
                        <hr />
                        <p className="card-text">{`${flight.itineraries[0].segments[0].departure.iataCode} --> ${flight.itineraries[0].segments[0].arrival.iataCode}`}</p>
                        <p className="card-text">{`${flight.itineraries[0].segments[0].departure.at.split("T")[0]} @ ${timeConverter(flight.itineraries[0].segments[0].departure.at.split("T")[1])}`}</p>
                        <hr />
                        <p className="card-text">{`${flight.itineraries[1].segments[0].departure.iataCode} --> ${flight.itineraries[1].segments[0].arrival.iataCode}`}</p>
                        <p className="card-text">{`${flight.itineraries[1].segments[0].departure.at.split("T")[0]} @ ${timeConverter(flight.itineraries[1].segments[0].departure.at.split("T")[1])}`}</p>
                        {!showTrips?<button type="button" onClick={() => handleClick()} className="btn btn-primary">{btnTxt}</button> :null}
                        {showTrips?<select onChange={handleSelect}>
                            <option value="none">Pick a Trip</option>
                            {trips.map(trip => <option value={trip.id}>{trip.name}</option>)}
                            <option value="new">Make New Trip</option>
                            </select>:null}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default FlightCard