import React from 'react'
//import Counter from './Counter'
import Don from './Don'
import Landing from './Landing'
import { Route } from 'react-router-dom'

function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min // The maximum is exclusive and the minimum is inclusive
}

function getWidth () {
  const width = window.innerWidth
  const randomWidth = getRandomInt(100, width - 100)

  return randomWidth
}

function getHeight () {
  const height = window.innerHeight
  const randomHeight = getRandomInt(200, height - 200)
  return randomHeight
}

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
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
