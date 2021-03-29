import React from 'react'

import Trips from './Trips'
import Flights from './Flights'
import SearchForm from '../components/SearchForm'

export default class MainContainer extends React.Component {
    state ={
        renderFlights: false,
        renderHouses: false,
        searchRequest: {},
        tripList: []
    }

    passSearch = (dateStart,dateEnd,locStart,locEnd) => {
        // console.log("hi")
        this.setState({searchRequest:{startDate:dateStart,endDate:dateEnd,depart:locStart,arrive:locEnd}})
        this.setState({renderFlights:true})
    }

    tripList = (listOfTrips) => {
        console.log(listOfTrips)
        this.setState({tripList:listOfTrips})
    }



    render(){
        return(
            <div>
                <Trips trips={this.state.tripList} tripList={this.tripList}/>
                <SearchForm passSearch={this.passSearch}/>
                {this.state.renderFlights?<Flights searchRequest={this.state.searchRequest} trips={this.state.tripList}/>:null}
            </div>
        )
    }

}
