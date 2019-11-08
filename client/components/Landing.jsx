import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
// import {} from '../../public/don_wally.jpg'

class Landing extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className='container textCenter' style={{
          // width: '100%',
          // height: '100%',
          marginTop: '50px'
          // marginLeft: '3vw'
        }}>
          <Card className="d-flex justify-content-center" style={{ width: '18rem' }}>
            <Card.Img style={{ width: '18rem' }} variant="top" src="images/don_face.png"/>
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

      </React.Fragment>
    )
  }
}

export default Landing
