import React from 'react'
import Don from './Don'
import Counter from './Counter'

class Game extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Counter />
        <Don />

      </React.Fragment>
    )

  }

}

export default Game
