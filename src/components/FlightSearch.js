import React, { useState } from 'react'


const FlightSearch = ({ passSearch }) => {

    const [departDate, setDepartDate] = useState(new Date())
    const [returnDate, setReturnDate] = useState(new Date())

    const handleSubmit = (e) => {
        e.preventDefault()
        const targ = e.target
        passSearch(departDate, returnDate, targ.depart_location.value, targ.destination.value)
        e.target.reset()
    }

    return (
        <div>
            <h3>Find Your Flight</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Flight</label>
                    <input type="text" className="col-sm-10 form-control" name="depart_location" placeholder="From?"/>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Flight</label>
                    <input type="text" className="col-sm-10 form-control" name="destination" placeholder="To?"/>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Leaving</label>
                    <input type="date" min={new Date()} onChange={(e) => setDepartDate(e.target.value)} className="col-sm-10 form-control" name="start_date"/>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Returning</label>
                    <input type="date" min={departDate} onChange={(e) => setReturnDate(e.target.value)} className="col-sm-10 form-control" name="return_date"/>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">People</label>
                    <input type="number" className="col-sm-10 form-control" name="people" min="1"/>
                </div>
                <div className="form-group row">
                    <input type="submit" className="btn btn-outline-success search-btn" value="Search Flights" />
                </div>
            </form>
        </div>
    )

}

export default FlightSearch