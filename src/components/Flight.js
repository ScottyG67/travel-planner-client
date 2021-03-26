import React from 'react'

const Flight = ({flight}) => {

    const outDepart = flight.itineraries[0].segments[0].departure
    const outArrive = flight.itineraries[0].segments.slice(-1)[0].arrival
    const outDate = outArrive.at.slice(5,10)+-+outArrive.at.slice(0,4)
    const outDepartTime = outDepart.at.slice(11,-3)
    const outArriveTime = outArrive.at.slice(11,-3)

    const returnDepart = flight.itineraries.slice(-1)[0].segments[0].departure
    const returnArrive = flight.itineraries.slice(-1)[0].segments.slice(-1)[0].arrival
    const returnDate = returnDepart.at.slice(5,10)+-+returnDepart.at.slice(0,4)
    const returnDepartTime = returnDepart.at.slice(11,-3)
    const returnArriveTime = returnArrive.at.slice(11,-3)
    

    return (
        <div className="ui column">
            <div className="ui card">
                <div className="content">
                    <div className="header">
                        <h3>Flight info</h3>
                    </div>
                    <div className="meta text-wrap">
                        <p>${flight.price.grandTotal}</p>
                        <p>Outbound</p>
                        <ul>
                            <li>{outDate}</li>
                            <li>{outDepart.iataCode} to {outArrive.iataCode}</li>
                            <li>Take off: {outDepartTime}</li>
                            <li>Land: {outArriveTime}</li>
                        </ul>
                        <p>Return</p>
                        <ul>
                            <li>{returnDate}</li>
                            <li>{returnDepart.iataCode} to {returnArrive.iataCode}</li>
                            <li>Take off: {returnDepartTime}</li>
                            <li>Land: {returnArriveTime}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Flight