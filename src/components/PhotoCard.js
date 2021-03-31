import React from 'react'
import Card from 'react-bootstrap/Card';

const PhotoCard = ({image}) => {

    const thumbLink = image.urls.thumb
    const desc = image.description

    return(
        <Card>
            <Card.Img src={thumbLink} />
        </Card>
        )
}

export default PhotoCard
