import React from 'react'
// import Counter from './Counter'
import Don from './Don'
import Landing from './Landing'
import { Route } from 'react-router-dom'
import Game from './Game'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class App extends React.Component {
  state = {
<<<<<<< HEAD
    circle: {
      cx: getWidth(),
      cy: getHeight(),
      r: 40
    },
    count: 0,
    color: randomHexColor()
=======
    count: 0

  }

  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }))
>>>>>>> 42a66c72dfb795985215ba33a2b6471c83850212
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
<<<<<<< HEAD
        <Counter />
        <svg width={window.innerWidth} height={window.innerHeight} style={styles.paperContainer}>
          <defs>
            <pattern id="image" x="0" y="0" patternUnits="userSpaceOnUse" height="100%" width="100%">
              <image x="0" y="0" xlinkHref="/images/don_wally.jpeg"></image>
            </pattern>
          </defs>
          <circle fill="url(#image)" cx={this.state.circle.cx} cy={this.state.circle.cy} r={this.state.circle.r} />
        </svg>
=======
        <Landing />
        <Game handleClick={this.handleClick} count={this.state.count}/>

        <Route exact path='/' component = { Landing } />
        <Route path='/game' component = { Don } />

>>>>>>> 42a66c72dfb795985215ba33a2b6471c83850212
      </React.Fragment>
    )
  }
}

export default App
