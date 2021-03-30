import React from 'react'

import Trips from './Trips'
import FlightsContainer from './FlightsContainer'
import SearchForm from '../components/SearchForm'
import { withRouter } from 'react-router'

class MainContainer extends React.Component {
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

    logout = ()=>{
        localStorage.removeItem("id")
        localStorage.removeItem("token")
        this.props.history.push('/login')
        // debugger
      }

    render(){
        return(
            <div>
                <button onClick={this.logout}>Logout</button>
                <Trips updateMainContTripList={this.updateTripList}/>
                {/* <SearchForm passSearch={this.passSearch}/> */}
                {/* {this.state.renderFlights?<FlightsContainer searchRequest={this.state.searchRequest} trips={this.state.tripList}/>:null} */}
            </div>
        )
    }

}

export default withRouter(MainContainer)
