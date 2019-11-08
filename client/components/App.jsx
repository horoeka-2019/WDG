import React from 'react'
// import Counter from './Counter'
import Landing from './Landing'
import { Route } from 'react-router-dom'
import Game from './Game'
import Win from './Win'

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
        {/* <Landing />
        <Game handleClick={this.handleClick} count={this.state.count}/> */}

        {/* <Game handleClick={this.handleClick} count={this.state.count}/> */}

        {/* <Route exact path='/' component = { Landing } />
        <Route path='/game' component = { Game } />
        <Route path='/win' component = { Win } /> */}

        {/* <Counter />
        <svg width={window.innerWidth} height={window.innerHeight}>
          <circle cx={this.state.circle.cx} cy={this.state.circle.cy} r={this.state.circle.r} />
        </svg> */}
        {/* <Landing />
        <Counter /> */}

        {/* <Landing /> */}
        <Route exact path='/' component= { Landing }/>
        <Route path='/game' render={() => <Game handleClick={this.handleClick} count={this.state.count} isAuthed={true}/>}/>
        <Route path='/win' component = { Win } />
      </React.Fragment>
    )
  }
}

export default App
