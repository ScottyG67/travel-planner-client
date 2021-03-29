import React from 'react'

const FlightCard = ({ flight }) => {

    return (
        // <tr onClick={() => alert(`Flight: ${flight.id} was clicked`)} style={{fontSize: "14px"}}>
        //     <td>{`$${flight.price.total}`}</td>
        //     <td>{flight.itineraries[0].segments[0].departure.at.split("T")[0]}</td>
        //     <td>{flight.itineraries[0].segments[0].departure.iataCode}</td>
        //     <td>{flight.itineraries[0].segments[0].departure.at.split("T")[1]}</td>
        //     <td>{flight.itineraries[0].segments[0].arrival.iataCode}</td>
        //     <td>{flight.itineraries[0].segments[0].arrival.at.split("T")[1]}</td>
        // </tr>
        <div className="col-sm-6">
            <div className="card" style={{marginTop: ".5rem"}}>
                <div className="card-body">
                    {/* <h5 className="card-title">{`${flight.itineraries[0].segments[0].departure.iataCode} --> ${flight.itineraries[0].segments[0].arrival.iataCode}`}</h5>
                    <h6 className="card-text">{`$${flight.price.total}`}</h6> */}
                    <h1>Hello</h1>
                </div>
            </div>
        </div>
    )

}

export default FlightCard