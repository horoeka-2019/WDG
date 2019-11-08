import React from 'react'
import Counter from './Counter'
import Don from './Don'
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
  render () {
    return (
      <React.Fragment>
        <Landing />
        <Counter />
        <Don />
      </React.Fragment>
    )
  }
}

export default App
