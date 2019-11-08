import React from 'react'

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

class Don extends React.Component {
 state = {
   rect: {
     x: getWidth(),
     y: getHeight()
   },
   count: 0
 }

 handleClick = () => {
   this.setState(({ count }) => ({
     count: count + 1
   }))
 }

 render () {
   const styles = {
     donContainer: {
       backgroundImage: `url${'images/don_wally.jpg'}`
     }
   }
   return (
     <svg width={window.innerWidth} height={window.innerHeight} style>
       <rect x={this.state.rect.x} y={this.state.rect.y} style={styles.donContainer} />
     </svg>
     // img maybe instead?
   )
 }
}

export default Don
