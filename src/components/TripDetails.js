import React, {useState} from 'react'

const TripDetails = ({trip,showDetail,toggleEdit,deleteTrip}) => {
    
    const [name, setName] = useState(trip.name)
    const [description,setDescription] = useState(trip.description)


    return(
        <div>
            <div className='trip_details' onClick={(trip)=>{showDetail(trip)}}>
                <h4>{name}</h4>
                <img className='thumbnail' alt={trip.name} src={trip.image} />
                <strong>Description:</strong>
                <p>{description}</p>
            </div>
            <div>
                <button onClick={toggleEdit}>Edit</button>
                <button onClick={()=>deleteTrip(trip.id)}>Cancel Trip</button>
            </div>
        </div>
    )
}
export default TripDetails