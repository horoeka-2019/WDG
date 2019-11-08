import React from 'react'
import Counter from './Counter'

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

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class App extends React.Component {
  state = {
    circle: {
      cx: getWidth(),
      cy: getHeight(),
      r: 40
    },
    count: 0,
    color: randomHexColor()
  }

  render () {
    const styles = {
      paperContainer: {
        backgroundImage: `url(${'images/wally1.jpg'})`
      }
    }

    const donStyle = {
      container: {
        fill: `url(${'images/don_wally.jpg'})`
      }
    }
    return (
      <React.Fragment>
        <Counter />
        <svg width={window.innerWidth} height={window.innerHeight} style={styles.paperContainer}>
          <defs>
            <pattern id="image" x="0" y="0" patternUnits="userSpaceOnUse" height="100%" width="100%">
              <image x="0" y="0" xlinkHref="/images/don_wally.jpeg"></image>
            </pattern>
          </defs>
          <circle fill="url(#image)" cx={this.state.circle.cx} cy={this.state.circle.cy} r={this.state.circle.r} />
        </svg>
      </React.Fragment>
    )
  }
}

export default App
