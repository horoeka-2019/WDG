import React from 'react'
// import Counter from './Counter'
import Landing from './Landing'
import { Route } from 'react-router-dom'
import Game from './Game'
import Win from './Win'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

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

{ /* <svg width={window.innerWidth} height={window.innerHeight} style={styles.paperContainer}>
<defs>
  <pattern id="image" x="0" y="0" patternUnits="userSpaceOnUse" height="100%" width="100%">
    <image x="0" y="0" xlinkHref="/images/don_wally.jpeg"></image>
  </pattern>
</defs>
<circle fill="url(#image)" cx={this.state.circle.cx} cy={this.state.circle.cy} r={this.state.circle.r} />
</svg> */ }

export default App
