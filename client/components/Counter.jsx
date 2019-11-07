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

  render () {
    return (
      <React.Fragment>
        <div>
          <button onClick={this.handleClick}>Wally</button>
          <button>{this.state.count}</button>
        </div>

      </React.Fragment>
    )
  }
}

export default Counter
