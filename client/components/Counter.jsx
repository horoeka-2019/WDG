import React from 'react'
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'

class Counter extends React.Component {
  state = {
    count: 0

  }

  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }))
  }

  //   render () {
  //     return (
  //       <React.Fragment>
  //         <div>
  //           <div onClick={this.handleClick}></div>
  //           <button>{this.state.count}</button>
  //         </div>

  //       </React.Fragment>
  //     )
  //   }
  // }

  render () {
    return (
      <React.Fragment>

        <Card className="text-center card text-black bg-danger mb-3" style={{ width: '100%', height: '10rem' }}>
          <Card.Body>
            <Card.Title className='font-weight-bold' style={{ fontSize: '2rem' }}>WHERE HAS DON GON?!</Card.Title>
            <Card.Subtitle style={{ fontSize: '1.3rem' }}>Your Score:</Card.Subtitle>
            <br></br>
            <Card.Subtitle style={{ fontSize: '1.3rem' }}>{this.state.count}</Card.Subtitle>
          </Card.Body>
        </Card>
      </React.Fragment>
    )
  }
}

export default Counter
