import React, {useState} from 'react'

const TripDetails = ({trip,saveEdit,deleteTrip}) => {
    const [name, setName] = useState(trip.name)
    const [description,setDescription] = useState(trip.description)
    const [img, setImg] = useState(trip.image)

    const handleSubmit = (e) =>{
        e.preventDefault()
        saveEdit(trip.id,name,description,img)

    }

    // onClick={(trip)=>{showDetail(trip)}}
    return(
        <div className='trip_details' >
            <form onSubmit = {handleSubmit}>
                <input type = 'text' name='name' value = {name} onChange ={e => setName(e.target.value)}/>
                <input type = 'text' name='description' value = {description} onChange ={e => setDescription(e.target.value)}/>
                <input type = 'text' name='image' value = {img} onChange ={e => setImg(e.target.value)}/>
                <button type="submit" value="Submit" >Save</button>
            </form>
            {/* <button onClick={()=>saveEdit(trip)}>Edit</button> */}
            <button onClick={()=>deleteTrip(trip)}>Cancel Trip</button>
        </div>
    )
}
export default TripDetails