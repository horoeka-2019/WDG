import React from 'react'
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'

class Counter extends React.Component {
  state = {
    count: 0

  }

  // render () {
  //   return (
  //     <React.Fragment>
  //       <div>
  //         <div onClick={this.handleClick}>Your Score</div>
  //         <button>{this.state.count}</button>
  //       </div>

  //     </React.Fragment>
  //   )
  // }

  render () {
    return (
      <React.Fragment>

        <Card className="card text-white bg-dark mb-3" style={{ width: '15rem', height: '7rem' }}>
          <Card.Body>
            <Card.Title>Dons Found</Card.Title>
            <Card.Title>{this.state.count}</Card.Title>
          </Card.Body>
        </Card>

      </React.Fragment>
    )
  }
}

export default Counter
