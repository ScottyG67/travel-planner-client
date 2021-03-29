import React, { useState } from 'react'

import FlightsContainer from './FlightsContainer'
import SearchForm from '../components/SearchForm'

const Main = ({ currentUser }) => {

    const [renderFlights, setRenderFlights] = useState(false)
    const [renderHouses, setRenderHouses] = useState(false)
    const [searchRequest, setSearchRequest] = useState({})

    const passSearch = (dateStart, dateEnd, locStart, locEnd) => {
        setSearchRequest({startDate: dateStart, endDate: dateEnd, depart: locStart, arrive: locEnd})
        setRenderFlights(true)
    }

    return (
        <div>
            <h1>{ `Hello, ${currentUser.first_name}!` }</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <SearchForm passSearch={passSearch} />
                        {renderFlights ? <FlightsContainer searchRequest={searchRequest} /> : null}
                    </div>
                    <div className="col-md-6">
                        <h1>Photo Feed</h1>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Main