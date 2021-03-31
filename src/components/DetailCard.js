import React from 'react'

const DetailCard = ({ flightInfo, changeFlight }) => {

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

    const outboundSegments = flightInfo.itineraries[0].segments
    const outboundDepartAirport = outboundSegments[0].departure.iataCode
    const outboundDepartTime = timeConverter(outboundSegments[0].departure.at.split("T")[1])
    const outboundArrivalAirport = outboundSegments[outboundSegments.length - 1].arrival.iataCode
    const outboundArrivalTime = timeConverter(outboundSegments[outboundSegments.length - 1].arrival.at.split("T")[1])
    const outboundFlightNumber = outboundSegments.length

    const inboundSegments = flightInfo.itineraries[1].segments
    const inboundDepartAirport = inboundSegments[0].departure.iataCode
    const inboundDepartTime = timeConverter(inboundSegments[0].departure.at.split("T")[1])
    const inboundArrivalAirport = inboundSegments[inboundSegments.length - 1].arrival.iataCode
    const inboundArrivalTime = timeConverter(inboundSegments[inboundSegments.length - 1].arrival.at.split("T")[1])
    const inboundFlightNumber = inboundSegments.length
    
    return (
        <div className="overflow-auto" style={{ color: "black", borderRadius: "5%", backgroundColor: "#e4fbff", position: "absolute", top: "80%", left: "15%", width: "70%", height: "60%", zIndex: "1" }}>
            <div style={{ paddingTop: ".25rem" }}>
                <h1>Price: {`$${flightInfo.price}`} <button className="btn btn-success" onClick={() => alert('booking attempt')}>Book Now!</button></h1>
            </div>
            <hr />
            <div style={{ padding: "0rem 1rem" }}>
                <h2>Outbound Flight Details</h2>
                <h4>{`${outboundDepartAirport} --> ${outboundArrivalAirport}`}</h4>
                <p>{`Take-off: ${outboundDepartTime}; Landing: ${outboundArrivalTime}`}</p>
                <p>{outboundFlightNumber === 1 ? `Direct Flight` : `# of Flights: ${outboundFlightNumber}`}</p>
            </div>
            <hr />
            <div style={{ padding: "0rem 1rem" }}>
                <h2>Inbound Flight Details</h2>
                <h4>{`${inboundDepartAirport} --> ${inboundArrivalAirport}`}</h4>
                <p>{`Take-off: ${inboundDepartTime}; Landing: ${inboundArrivalTime}`}</p>
                <p>{inboundFlightNumber === 1 ? `Direct Flight` : `# of Flights: ${inboundFlightNumber}`}</p>
            </div>
            <button className="btn btn-secondary" onClick={() => changeFlight(null)}>Close</button>
        </div>
    )

}

export default DetailCard