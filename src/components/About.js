import React from 'react'
import {CardColumns as Group} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

const About = () => {

    const pageDescription ="This is text to talk about how awesome our app is and how it works"
    const scottBio ="Scott is a really cool guy"
    const jacobBio = "He is alright... I guess..."

    const scottImg = "https://media-exp1.licdn.com/dms/image/C4D03AQHB91ltffZGRw/profile-displayphoto-shrink_200_200/0/1516529962541?e=1622678400&v=beta&t=oS5kuEk6rsVQDYzbvt9QCkYcG4nEi1WrT9RBYK9sT38"
    const jacobImg = "https://media-exp1.licdn.com/dms/image/C4D03AQFu4DUrkdYaPQ/profile-displayphoto-shrink_200_200/0/1599159365046?e=1622678400&v=beta&t=292ImnPqJQZ5XARzf8SSHUjYCbb62JvV3K4bO-_dFck"

    return( 
        <div>
            <h1>About</h1>
            <h2>This Project</h2>
            <p>{pageDescription}</p>
            <Group className ={'about-cards'}>
                <Card>
                    <Card.Img src ={scottImg} />
                    <Card.Body style={{backgroundColor:"#282c34"}}>
                        <Card.Title>Scott Gloyna</Card.Title>
                        <Card.Text>{scottBio}</Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img src ={jacobImg} />
                    <Card.Body style={{backgroundColor:"#282c34"}}>
                        <Card.Title>Jacob Hambton</Card.Title>
                        <Card.Text>{jacobBio}</Card.Text>
                    </Card.Body>
                </Card>
                
            </Group>

        </div>
    )
}

export default About