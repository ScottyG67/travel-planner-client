import React from 'react'
import { List } from 'semantic-ui-react'

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
            <div className="ui_card">
                <div className="content">
                    <div className="header">
                        <h3></h3>
                        <h3>${flight.price.grandTotal}</h3>
                    </div>
                    <div className="extra content">
                        <p>Outbound</p>
                        <List>
                            <List.Item>{outDate}</List.Item>
                            <List.Item>Take off: {outDepartTime}</List.Item>
                            <List.Item>Land: {outArriveTime}</List.Item>
                        </List>
                        <p>Return</p>
                        <List>
                            <List.Item>{returnDate}</List.Item>
                            <List.Item>Take off: {returnDepartTime}</List.Item>
                            <List.Item>Land: {returnArriveTime}</List.Item>
                        </List>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Flight