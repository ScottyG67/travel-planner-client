import React from 'react'

import Trips from './Trips'
import FlightsContainer from './FlightsContainer'
import SearchForm from '../components/SearchForm'

export default class MainContainer extends React.Component {
    state ={
        renderFlights: false,
        renderHouses: false,
        searchRequest: {},
        trips: []
    }

    passSearch = (dateStart,dateEnd,locStart,locEnd) => {
        // console.log("hi")
        this.setState({searchRequest:{startDate:dateStart,endDate:dateEnd,depart:locStart,arrive:locEnd}})
        this.setState({renderFlights:true})
    }
 
    updateTripList = (listOfTrips) => {
        console.log('updating')
        this.setState({tripList:listOfTrips})
    }

    // updateTripList = (trip) => {
    //     let list = this.state.tripList.map(trip => trip)
    //     const index = list.findIndex(curTrip=>curTrip.id === trip.id)
    //     if(index) {
    //         list[index] = trip
    //         this.setState({tripList:list})
    //     } else {
    //         this.setState({tripList: [...list,trip]})
    //     }
    // }

    render(){
        return(
            <div>
                <Trips updateTripList={this.updateTripList}/>
                <SearchForm passSearch={this.passSearch}/>
                {this.state.renderFlights?<FlightsContainer searchRequest={this.state.searchRequest} trips={this.state.tripList}/>:null}
            </div>
        )
    }

}
