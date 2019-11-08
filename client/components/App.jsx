import React from 'react'
import Counter from './Counter'
import Don from './Don'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Counter />
        <Don />
      </React.Fragment>
    )
  }
}

export default App
