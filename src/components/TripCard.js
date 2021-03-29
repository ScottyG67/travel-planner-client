const TripCard = ({trip,showDetail}) => {


    return(
        <div className='trip_card' onClick={()=>{showDetail(trip)}}>
            <h4>{trip.name}</h4>
            <img className='thumbnail' alt={trip.name} src={trip.image} />

        </div>
        )
}
export default TripCard