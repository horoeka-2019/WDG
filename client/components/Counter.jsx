import React from 'react'

class Counter extends React.Component {
  state = {
    count: 3

  }

  increaseCount = () => {
    const currentCount = this.state.count
    this.setState({
      count: currentCount + 1
    }
    )
  }

  render () {
    return <button onClick= {() => alert('component Wally')}>{this.state.count}</button>
  }
}

export default Counter
