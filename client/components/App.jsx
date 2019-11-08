import React from 'react'
// import Counter from './Counter'
import Don from './Don'
import Landing from './Landing'
import { Route } from 'react-router-dom'
import Game from './Game'

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
        <Game handleClick={this.handleClick} count={this.state.count}/>

        <Route exact path='/' component = { Landing } />
        <Route path='/game' component = { Don } />

      </React.Fragment>
    )
  }
}

export default App
