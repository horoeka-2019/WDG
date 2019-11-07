import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Landing extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Where's Don Gon?</Card.Title>
            <Card.Text>
              Click on Don to Win!
            </Card.Text>
            <Button variant="primary">Start Game!</Button>
          </Card.Body>
        </Card>

      </React.Fragment>
    )
  }
}

export default Landing
