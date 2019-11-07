import React from 'react'

class Counter extends React.Component {
  state = {
    count: 0

  }

  increaseCount = () => {
    const currentCount = this.state.count
    this.setState({
      count: currentCount + 1
    }
    )
  }


  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }))
  }

  render () {
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>Wally</button>
        <button>{this.state.count}</button>
      </React.Fragment>
    )
  }
}

export default Counter
