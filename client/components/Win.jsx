import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Win extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className='container textCenter' style={{
          //width: '100%',
          //height: '100%',
          marginTop: '50px',
          //marginLeft: '3vw'
        }}>
          <Card className="d-flex justify-content-center" style={{ width: '18rem' }}>
            <Card.Img style={{ width: '18rem' }} variant="top" src="images/don_face.png"/>
            <Card.Body>
              <Card.Title>You won!</Card.Title>
              <Card.Text>
                  Play again??
              </Card.Text>
              <Button variant="primary">Play again</Button>
            </Card.Body>
          </Card>
        </div>

      </React.Fragment>
    )
  }
}

export default Win
