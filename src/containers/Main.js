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
            <SearchForm passSearch={passSearch} />
            {renderFlights ? <FlightsContainer searchRequest={searchRequest} /> : null}
        </div>
    )

}

export default Main