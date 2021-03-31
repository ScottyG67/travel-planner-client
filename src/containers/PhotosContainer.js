import React from 'react'
import {useState,useEffect} from 'react'
import {CardColumns as Group} from 'react-bootstrap'
import {Pagination} from 'react-bootstrap'

import PhotoCard from '../components/PhotoCard'
import PhotoSearch from '../components/PhotoSearch'


const PhotosContainer = () => {

    const defltImg = {"urls":{ "thumb":'https://media4.giphy.com/media/11ASZtb7vdJagM/giphy.gif?cid=ecf05e47lpflk68vu2apqrazhe8wjm8k6ateem5tpk2l6ut3&rid=giphy.gif'}}
        //images
        const [images,setImages] = useState([])
        const [page,setPage] = useState(1)
        const [searchTerm, setSearchTerm] = useState('travel')

        useEffect( () => {
            fetchImages()
        },[])

        const fetchImages = (searchText = searchTerm, searchPage = page) => {
            const id = 'ySKed-spQTnHbLCtkKPwd0XLMoMZJOJ3Nanc5HyDyMw'
            const url = `https://api.unsplash.com/search/photos?query=${searchText}&per_page=10&page=${searchPage}&client_id=ySKed-spQTnHbLCtkKPwd0XLMoMZJOJ3Nanc5HyDyMw`
            fetch(url)
            .then(res=> res.json())
            .then(respImgs=> setImages(respImgs.results))
        }

        const searchImages = (searchText) => {
            setSearchTerm(searchText)
            fetchImages(searchText)
            
        }

        const pageChange = (e) => {
            let newPage = page
            if(e.target.innerText ==="Previous"){
                newPage -= 1
            } else {
                newPage += 1
            }
            setPage(newPage)
            fetchImages(searchTerm,page)
        }
    

    return(
        <div>
            <h1>Photo Feed</h1>
            <PhotoSearch searchImages ={searchImages}/>
            <Group className={'image-card-group'}>
                {images.length>0? images.map(image => <PhotoCard image ={image} />):null} {/* <PhotoCard image={defltImg}/> */}
            </Group>
            <Pagination size='sm'>
                <Pagination.Prev onClick={(e)=>pageChange(e)}/>
                <Pagination.Next onClick={(e)=>pageChange(e)}/>
            </Pagination>
        </div>

    )
}

export default PhotosContainer