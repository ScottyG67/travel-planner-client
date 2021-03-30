import React from 'react'

const FlightCard = ({ flight }) => {

    // Work on functions like flight path to clean up what's happening below...
        // Start with different  functions for outgoing and incoming.
    const flightPath = (f, i) => {
        const base = f.itineraries[i].segments
        // return `${base[0].departure.iataCode} --> ${base[base.length - 1].arrival.iataCode}`
        return `${f.itineraries[i].segments[0].departure.iataCode} --> ${f.itineraries[i].segments[f.itineraries[i].segments.length - 1].arrival.iataCode}`
    }

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

    return (
        <div className="col-sm-12">
            <div className="card" style={{marginTop: ".5rem", color: "black"}}>
                <div className="card-body">
                    <h5 className="card-title">{`$${flight.price.total}`} <button type="button" onClick={() => alert('User wants to book flight')} className="btn btn-primary">Book Now!</button></h5>
                    <hr />
                    <p className="card-text">{`${flight.itineraries[0].segments[0].departure.iataCode} --> ${flight.itineraries[0].segments[flight.itineraries[0].segments.length - 1].arrival.iataCode}`}</p>
                    {/* <p className="card-text">{flightPath(flight, 0)}</p> */}
                    <p className="card-text">{`${flight.itineraries[0].segments[0].departure.at.split("T")[0]} @ ${timeConverter(flight.itineraries[0].segments[0].departure.at.split("T")[1])}`}</p>
                    <hr />
                    <p className="card-text">{`${flight.itineraries[1].segments[0].departure.iataCode} --> ${flight.itineraries[1].segments[flight.itineraries[1].segments.length - 1].arrival.iataCode}`}</p>
                    {/* <p className="card-text">{flightPath(flight, 1)}</p> */}
                    <p className="card-text">{`${flight.itineraries[1].segments[0].departure.at.split("T")[0]} @ ${timeConverter(flight.itineraries[1].segments[0].departure.at.split("T")[1])}`}</p>
                </div>
            </div>
        </div>
    )

}

export default FlightCard