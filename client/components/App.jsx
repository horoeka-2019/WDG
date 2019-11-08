import React from 'react'
//import Counter from './Counter'
import Don from './Don'
import Landing from './Landing'
import { Route } from 'react-router-dom'

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
        {/* <Don /> */}
        <Route exact path='/' component = { Landing } />
        <Route path='/game' component = { Don } />
        {/* <Counter />
        <svg width={window.innerWidth} height={window.innerHeight}>
          <circle cx={this.state.circle.cx} cy={this.state.circle.cy} r={this.state.circle.r} />
        </svg> */}
        {/* <Landing />
        <Counter /> */}

      </React.Fragment>
    )
  }
}

export default App
