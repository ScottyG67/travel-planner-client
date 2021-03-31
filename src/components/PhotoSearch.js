import React from 'react'
import {useState} from 'react'
import { Form, Button } from 'react-bootstrap';


const PhotoSearch = ({searchImages}) => {
    const [searchText,setSearchText] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitting")
        searchImages(searchText)
        

    }

    const handleChange = (e) =>{
        setSearchText(e.target.value)
    }

    return(
        <Form onSubmit ={(e)=>handleSubmit(e)}>
            <Form.Group onChange={handleChange}>
                <Form.Label>Find Cool Images</Form.Label>
                <Form.Control name="search" type="text" placeholder="Find Cool Images"/>
            </Form.Group>
            <Button variant='primary' type ="submit">Search</Button>
        </Form>
    )
}

export default PhotoSearch