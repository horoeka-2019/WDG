import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

class Win extends React.Component {
  render () {
    return (
      <React.Fragment>
         <div style={{
          backgroundColor: 'red',
          height: '100vh',
          }}>

           <div className='container textCenter'>
          <Card style={{ width: '18rem' }}>
            <Card.Img style={{ width: '8rem' }} variant="top" src="images/don_face.png"/>
            <Card.Body>
              <Card.Title>You won!</Card.Title>
              <Card.Text>
                  Play again??
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

export default Win
