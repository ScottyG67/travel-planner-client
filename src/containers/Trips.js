import { useEffect, useState } from "react"
import DestinationTitleBar from "../components/DestinationTitleBar"
import TripCard from '../components/TripCard'
import TripDetails from '../components/TripDetails'
import EditTrip from '../components/EditTrip'
// import React {useState, useEffect} from 'react'



function Trips({updateTripList}) {

    const [trips, setTrips] = useState([])
    const [renderList, setRenderList] = useState(true)
    const [tripDetail, setTripDetail] = useState({})
    const [flights, setFlights] = useState([])
    const [editTrip,setEditTrip] = useState(false)

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
            .then( respTrips => setTrips(respTrips))

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
            .then(respTrip => setTrips([...trips,respTrip]))

    }


    const showDetail = (trip) => {
        console.log("show detail")
        setTripDetail(trip)
        setRenderList(!renderList)
    }

    const toggleEdit = () => {
        setEditTrip(!editTrip)
    }

    const saveEdit = (tripId,name,description,image) => {
        
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('id')

        const trip = {
            id: tripId,
            name: name,
            description: description,
            user_id: userId,
            image: image
        }
        const reqObj = {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(trip)
        }

        fetch(`http://localhost:3000/api/v1/users/${userId}/trips/${tripId}`,reqObj)
            .then( resp => resp.json() )
            .then(respTrip => {
                let list=trips.map(trip=>trip)
                const index = list.findIndex(trip=>trip.id === respTrip.id)
                list[index] = respTrip
                setTrips(list)
                toggleEdit()
            })
    }

    const deleteTrip =(tripId) => {
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('id')

        const reqObj = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }
        fetch(`http://localhost:3000/api/v1/users/${userId}/trips/${tripId}`,reqObj)
        .then(res=>res.json())
        .then(_ => {
          let newList = trips.filter(trip => trip.id !== tripId)
          setTrips(newList)
          setRenderList(true)
        })
      }


    // change renderList and edit trip to one conditional
    const renderView = (trip) =>{
        if (renderList){
            return trips.map( trip => <TripCard key={trip.id} trip={trip} showDetail={showDetail}/>)
        } else if (!editTrip){
            return <TripDetails trip={tripDetail} showDetail={showDetail} toggleEdit={toggleEdit} deleteTrip = {deleteTrip}/>
        } else {
            return <EditTrip trip={tripDetail} saveEdit ={saveEdit} />
        }

        // const tripIdName = trips.map(trip => {trip.id, trip.name})
        // console.log(tripIdName)
        updateTripList(trips)
    }

    return(
        <div>
            <h1>Your Trips</h1>
            {renderView()}
            {renderList?<button onClick ={newTrip}>New Trip</button>:null}
        </div>
    )

}

export default Trips