import React, {useState} from 'react'

const Flight = ({flight,saveFlight,trips}) => {
    const [tripId,setTripId]=useState()



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

    const handleSubmit = (e,flight,tripId) =>{
        e.preventDefault()
        saveFlight(flight,tripId)
    }
    

    return (
        <div className="ui column">
            <div className="ui_card">
                <div className="content">
                    <div className="header">
                        <h3></h3>
                        <h3>${flight.price.grandTotal}</h3>
                    </div>
                    <div className="extra content">
                        <p>Outbound</p>
                        <ul>
                            <li>{outDate}</li>
                            <li>Take off: {outDepartTime}</li>
                            <li>Land: {outArriveTime}</li>
                        </ul>
                        <p>Return</p>
                        <ul>
                            <li>{returnDate}</li>
                            <li>Take off: {returnDepartTime}</li>
                            <li>Land: {returnArriveTime}</li>
                        </ul>
                    </div>
                    <form onSubmit= {(e)=>handleSubmit(e,flight,tripId)}>
                        <select onChange={(e)=> setTripId(e.target.value)}>
                            {trips.map(trip => <option value={trip.id}>{trip.name}</option>)}
                        </select>
                        <button type="submit" value="Submit">Lets Go!</button>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}

export default Flight