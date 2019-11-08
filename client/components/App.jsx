import React from 'react'
import Counter from './Counter'
import Don from './Don'
import Landing from './Landing'

class App extends React.Component {
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
        <Landing />
        <Counter count={this.state.count}/>
        <Don handleClick={this.handleClick} count={this.state.count}/>
      </React.Fragment>
    )
  }
}

export default App
