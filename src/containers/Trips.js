import { useEffect, useState } from "react"
import DestinationTitleBar from "../components/DestinationTitleBar"
import TripCard from '../components/TripCard'
import TripDetails from '../components/TripDetails'
// import React {useState, useEffect} from 'react'

function Trips() {

    const [trips, setTrips] = useState([])
    const [renderList, setRenderList] = useState(true)
    const [tripDetail, setTripDetail] = useState({})
    const [flights, setFlights] = useState([])

    useEffect( () => { getTrips() }, [])


    const getTrips = () => {

        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('id')

        const reqObj = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            } 
        }

        fetch(`http://localhost:3000/api/v1/users/${userId}/trips`,reqObj)
            .then( resp => resp.json() )
            .then( respTrips => {setTrips(respTrips)})

    }

    const newTrip = () => {
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('id')

        const trip = {
            name: "New Trip",
            description: "This is going to be amazing!",
            user_id: userId,
            image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80'
        }


        const reqObj = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(trip)
        }

        fetch(`http://localhost:3000/api/v1/users/${userId}/trips`,reqObj)
            .then( resp => resp.json() )
            .then(respTrips => {setTrips([...trips, respTrips])})

        }

    const showDetail = (trip) => {
        console.log("show detail")
        setTripDetail(trip)
        setRenderList(!renderList)

    }

    const renderView = (trip) =>{
        if (renderList){
            return trips.map(trip => <TripCard trip={trip} showDetail={showDetail}/>)
        } else {
            return <TripDetails trip={tripDetail} showDetail={showDetail}/>
        }

    }

    return(
        <div>
            <h1>Your Trips</h1>
            {renderView()}
            {/* {trips.map(trip => <TripCard trip={trip} showDetail={showDetail}/>)} */}
            <button onClick ={newTrip}>New Trip</button>
        </div>
    )

}

export default Trips