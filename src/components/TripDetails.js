import React, {useState, useEffect, useRef} from 'react'
import useKeypress from "../hooks/useKeypress"
import useOnClickOutside from "../hooks/useOnClickOutside"

import FlightCard from './FlightCard'

const TripDetails = ({trip,showDetail,toggleEdit,deleteTrip,saveEdit}) => {

    const [showSaveBtn, setShowSaveBtn] = useState(false)
    
    const [isNameActive, setNameActive] = useState(false)
    const [name, setName] = useState(trip.name)
    const nameRef = useRef(null)
    const nameInputRef = useRef(null)

    const [isImgActive, setImgActive] = useState(false)
    const [img, setImg] = useState(trip.image)
    const imgRef = useRef(null)
    const imgInputRef = useRef(null)

    const [isDescriptionActive, setDescriptionActive] = useState(false)
    const [description,setDescription] = useState(trip.description)
    const descriptionRef = useRef(null)
    const descriptionInputRef = useRef(null)

    const [flights,setFlights] = useState([])

    const wrapperRef = useRef(null)

    const enter = useKeypress('Enter');
    const esc = useKeypress('Escape');

    const checkForChange = () => {
        if(description !== trip.description || name !== trip.name || img !== trip.image){
            setShowSaveBtn(true)
          }

    }

    useEffect(()=>{
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('id')
        const reqObj = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        }

        fetch(`http://localhost:3000/api/v1/users/${userId}/trips/${trip.id}/flights`,reqObj)
        .then(res=>res.json())
        .then(resFlights => setFlights(resFlights))
    },[])

/// Hooks for Name Field
    // this hook takes a ref to watch and a function to run
    // if the click happened outside
    useOnClickOutside(nameRef, () => {
        if (isNameActive) {
          // save the value and close the editor
          checkForChange()
          setNameActive(false);
        }
      });

    useEffect(() => {
        if (isNameActive) {
            nameInputRef.current.focus()
        }
    }, [isNameActive])

/// Hooks for Image Field
    // this hook takes a ref to watch and a function to run
    // if the click happened outside
    useOnClickOutside(imgRef, () => {
        if (isImgActive) {
          // save the value and close the editor
          checkForChange()
          setImgActive(false);
        }
      });

    useEffect(() => {
        if (isImgActive) {
            imgInputRef.current.focus()
        }
    }, [isImgActive])

/// Hooks for Desc Field
    // this hook takes a ref to watch and a function to run
    // if the click happened outside
    useOnClickOutside(descriptionRef, () => {
        if (isDescriptionActive) {
          setDescriptionActive(false)
          checkForChange()
        }
      });

    useEffect(() => {
        if (isDescriptionActive) {
            descriptionInputRef.current.focus()
        }
    }, [isDescriptionActive])


// Common Hooks
    useEffect(() => {
        if (setNameActive) {
          // if Enter is pressed, save the text and case the editor
          if (enter) {
            checkForChange()
            setNameActive(false);
          }
          // if Escape is pressed, revert the text and close the editor
          if (esc) {
            setName(trip.name);
            setNameActive(false);
          }
        }
        if (setDescriptionActive) {
            // if Enter is pressed, save the text and case the editor
            if (enter) {
                checkForChange()
                setDescriptionActive(false);
            }
            // if Escape is pressed, revert the text and close the editor
            if (esc) {
              setDescription(trip.description);
              setDescriptionActive(false);
            }
          }
      }, [enter, esc]);

    const handleSaveClick = () =>{
        setShowSaveBtn(false)
        saveEdit(trip.id,name,description,trip.image)
    }


    return(
        <div>
            <div className='trip_details' ref={wrapperRef}>
                <span className="inline-text" 
                    ref={nameRef}
                    onClick={() => setNameActive(true)}
                    >
                    <h4 className={`inline-text_copy inline-text_copy--${!isNameActive ? "active" : "hidden"}`}>{name}</h4>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        ref={nameInputRef}
                        className={`inline-text_input inline-text_input--${isNameActive ? "active" : "hidden"}`}
                    />
                </span>
                <div className="inline-text"
                    ref={imgRef}
                    onClick={() => setImgActive(true)}
                >
                    <img className={`thumbnail--${!isImgActive ? "active" : "hidden"}`} alt={name} src={img} />
                    <input
                        value={img}
                        onChange={(e)=> setImg(e.target.value)}
                        ref={imgInputRef}
                        className={`inline-text_input inline-text_input--${isImgActive ? "active" : "hidden"}`}
                    />
                </div>
                <div className="inline-text"
                    ref={descriptionRef}
                    onClick={() => setDescriptionActive(true)}
                >
                    <strong>Description:</strong>
                    <p className={`inline-text_copy inline-text_copy--${!isDescriptionActive ? "active" : "hidden"}`}>{description}</p>
                    <input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        ref={descriptionInputRef}
                        className={`inline-text_input inline-text_input--${isDescriptionActive ? "active" : "hidden"}`}
                    />
                </div>
            </div>
            <div>
                <button onClick={ trip => showDetail(trip) }>Go Back</button>
                {showSaveBtn? <button onClick ={handleSaveClick}>Save</button>: null}
                <button onClick={()=>deleteTrip(trip.id)}>Cancel Trip</button>
            </div>
            <div className='flight_cards'>
                {flights !== [] ? flights.map(flight => <FlightCard key={flight.id} flight={flight} />) : <h4>No Flights Found</h4>}
            </div>
        </div>
    )
}
export default TripDetails