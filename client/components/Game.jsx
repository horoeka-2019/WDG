import React from 'react'
import Don from './Don'
import Counter from './Counter'

class Game extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Don handleClick={this.props.handleClick} count={this.props.count}/>
        <Counter count={this.props.count}/>
      </React.Fragment>
    )

  }

}

export default Game
