const TripDetails = ({trip,showDetail}) => {


    return(
        <div className='trip_details' onClick={(trip)=>{showDetail(trip)}}>
            <h4>{trip.name}</h4>
            <img className='thumbnail' alt={trip.name} src={trip.image} />
            <strong>Description:</strong>
            <p>{trip.description}</p>
        </div>)
}
export default TripDetails