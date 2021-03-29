const DestinationTitleBar = ({searchRequest}) => {
    return <div><h2>Flights from {searchRequest.depart} to {searchRequest.arrive}</h2></div>
}

export default DestinationTitleBar