import React from 'react'

import Flights from './Flights'
import SearchForm from '../components/SearchForm'

export default class MainContainer extends React.Component {
    state ={
        renderFlights: false,
        renderHouses: false,
        searchRequest: {}
    }

passSearch = (dateStart,dateEnd,locStart,locEnd) => {
    // console.log("hi")
    this.setState({searchRequest:{startDate:dateStart,endDate:dateEnd,depart:locStart,arrive:locEnd}})
    this.setState({renderFlights:true})
}


render(){
    return(
        <div>
            <SearchForm passSearch={this.passSearch}/>
            {this.state.renderFlights?<Flights searchRequest={this.state.searchRequest}/>:null}
        </div>
    )
}

}