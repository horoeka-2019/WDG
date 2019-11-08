import React from 'react'
import Don from './Don'
import Counter from './Counter'

class Game extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Don />
        <Counter />
      </React.Fragment>
    )

  }

}

export default Game
