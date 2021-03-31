const TripCard = ({trip,showDetail}) => {


    return(
        <div className='trip_card col-md-6' style={{ display: "inline-block" }} onClick={()=>{showDetail(trip)}}>
            <h4>{trip.name}</h4>
            <img className='thumbnail--active' alt={trip.name} src={trip.image} />

        </div>
        )
}
export default TripCard