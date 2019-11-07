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
    return <button onClick={this.handleClick}>{this.state.count}</button>
  }
}

export default Counter
