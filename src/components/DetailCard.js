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

    const inboundSegments = flightInfo.itineraries[1].segments
    const inboundDepartAirport = inboundSegments[0].departure.iataCode
    const inboundDepartTime = timeConverter(inboundSegments[0].departure.at.split("T")[1])
    const inboundArrivalAirport = inboundSegments[inboundSegments.length - 1].arrival.iataCode
    const inboundArrivalTime = timeConverter(inboundSegments[inboundSegments.length - 1].arrival.at.split("T")[1])
    
    return (
        <div className="overflow-auto" style={{ color: "black", borderRadius: "5%", backgroundColor: "#e4fbff", position: "absolute", top: "90%", left: "25%", width: "60%", height: "60%", zIndex: "1" }}>
            <div style={{ padding: "2rem" }}>
                <h1>Outbound Flight Details</h1>
                <h3>{`${outboundDepartAirport} --> ${outboundArrivalAirport} -- $${flightInfo.price}`}</h3>
                <p>{`Take-off: ${outboundDepartTime}; Landing: ${outboundArrivalTime}`}</p>
            </div>
            <hr />
            <div style={{ padding: "2rem" }}>
                <h1>Inbound Flight Details</h1>
                <h3>{`${inboundDepartAirport} --> ${inboundArrivalAirport}`}</h3>
                <p>{`Take-off: ${inboundDepartTime}; Landing: ${inboundArrivalTime}`}</p>
            </div>
            <button className="btn btn-secondary" onClick={() => changeFlight(null)}>Close</button>
        </div>
    )

}

export default DetailCard