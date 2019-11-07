import React from 'react'
import Counter from './Counter'
import Landing from './Landing'

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
  state = {
    circle: {
      cx: getWidth(),
      cy: getHeight(),
      r: 40
    },
    count: 0
  }

  render () {
    return (
      <React.Fragment>
        <Landing />
        <svg width={window.innerWidth} height={window.innerHeight}>
          <circle cx={this.state.circle.cx} cy={this.state.circle.cy} r={this.state.circle.r} />
        </svg>
        <Counter />
      </React.Fragment>
    )
  }
}

export default App
