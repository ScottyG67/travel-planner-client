import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const Flight = ({flight,saveFlight}) => {

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
                    <Button animated onClick={()=>saveFlight(flight)}>
                        <Button.Content visible>Lets Go!</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow right' />
                        </Button.Content>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Flight