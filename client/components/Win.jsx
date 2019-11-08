import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

class Win extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className='container textCenter' style={{
          marginTop: '50px'
        }}>
          <Card className="d-flex justify-content-center" style={{ width: '18rem' }}>
            <Card.Img style={{ width: '18rem' }} variant="top" src="images/don_face.png"/>
            <Card.Body>
              <Card.Title>You won!</Card.Title>
              <Card.Text>
                  Play again??
              </Card.Text>
              <Button variant="primary">
                <Link to={'/game'}>
                </Link>
                Start Game!
              </Button>
            </Card.Body>
          </Card>
        </div>

      </React.Fragment>
    )
  }
}

export default Win
