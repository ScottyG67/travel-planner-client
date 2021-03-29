import React, {useState} from 'react'
import DatePicker from 'react-date-picker'
import { Button, Form, Checkbox } from 'semantic-ui-react'


const SearchForm = (props) => {
    const [departDate, setDepartDate] = useState(new Date())
    const [returnDate, setReturnDate] = useState(new Date())
    const [departLoc, setDepartLoc] = useState("")
    const [arriveLoc, setArriveLoc] = useState("")
    const [searchFlights,setSearchFlights] = useState(true)
    const [searchAccommodations,setSearchAccommodations] = useState("true")
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        props.passSearch(departDate,returnDate,departLoc,arriveLoc)
        setDepartDate("")
        setReturnDate("")
        setDepartLoc("")
        setArriveLoc("")
    }
    
    return (
        <div>
           <h1>Search for Flights</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Where are you</label>
                    <input
                        type="text"
                        name="departLoc"

                        onChange={e => setDepartLoc(e.target.value)}
                        value={departLoc}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Where do you want to be</label>
                    <input
                        type="text"
                        name="arriveLoc"
                        onChange={e => setArriveLoc(e.target.value)}
                        value={arriveLoc}
                    />
                </Form.Field>
                <Form.Field label='People' control='input' type='number' min={1} />
                {/* <Form.Field> */}
                    <label>When Do you want to go?</label>
                    <DatePicker 
                        onChange = {e => setDepartDate(e)}
                        value = {departDate}
                        minDate ={new Date()}
                    />
                {/* </Form.Field> */}
                {/* <Form.Field> */}
                    <label> and Come Back?</label>
                    <DatePicker 
                        onChange = {e => setReturnDate(e)}
                        value = {returnDate}
                        minDate = {departDate}
                    />
                {/* </Form.Field> */}
                {/* <Form.Field>
                    <Checkbox label='Search Flights' />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Search Accommodations' onChange= {e => setSearchAccommodations(e.target.value)} value= {searchAccommodations}/>
                </Form.Field> */}
                <br></br>
                 <Button type="submit" value="Submit" >Find My Flight!</Button>
            </Form>
        </div>
    )
}

export default SearchForm