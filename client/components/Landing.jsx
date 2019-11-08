import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
// import {} from '../../public/don_wally.jpg'

class Landing extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div style={{
          backgroundImage: `url(${'/images/wally1.jpg'})`,
          height: '100vh',
          }}>

        <div className='container textCenter'>
          <Card style={{ width: '18rem' }}>
            <Card.Img style={{ width: '8rem' }} variant="top" src="images/don_face.png"/>
            <Card.Body>
              <Card.Title>Where's Don Gon?</Card.Title>
              <Card.Text>
                  Click on Don to Win!
              </Card.Text>
              <Button variant="primary">
                <Link to={'/game'}style = {{ color: 'black' }}> Start Game!
                </Link>

              </Button>
            </Card.Body>
          </Card>
        </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Landing
