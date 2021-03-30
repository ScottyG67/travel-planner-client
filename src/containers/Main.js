import React, { useState } from 'react'

import FlightsContainer from './FlightsContainer'
import SearchForm from '../components/SearchForm'
import FlightSearch from '../components/FlightSearch'

const Main = ({ currentUser }) => {

    const [renderFlights, setRenderFlights] = useState(false)
    const [searchRequest, setSearchRequest] = useState({})

    const passSearch = (dateStart, dateEnd, locStart, locEnd) => {
        setRenderFlights(false)
        setSearchRequest({startDate: dateStart, endDate: dateEnd, depart: locStart, arrive: locEnd})
        setRenderFlights(true)
    }

    return (
        <div>
            <h1>{ `Hello, ${currentUser.first_name}!` }</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 prof-column">
                        {/* <SearchForm passSearch={passSearch} /> */}
                        <FlightSearch passSearch={passSearch} />
                        {renderFlights ? <FlightsContainer searchRequest={searchRequest} /> : null}
                    </div>
                    <div className="col-md-3 prof-column">
                        <h1>Photo Feed</h1>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Main