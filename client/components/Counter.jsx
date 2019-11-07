import React from 'react'

class Counter extends React.Component {
  state = {
    count: 0

  }

  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }))
  }

  getCount = () => {
    const num = this.state.count
    return num
  }

  render () {
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>Wally</button>
        <button>{this.state.count}</button>
        <br></br>
        <br></br>
        <button>You won GF! {this.getCount}</button>
      </React.Fragment>
    )
  }
}

export default Counter
