import React from 'react'
import Win from './Win'
import { Router, Redirect } from 'react-router-dom'

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
  const randomHeight = getRandomInt(200, height - 300)
  return randomHeight
}

class Don extends React.Component {
 state = {
   rect: {
     x: getWidth(),
     y: getHeight()
   },
   redirect: false
 }

 //  handleClick = () => {
 //    this.setState(({ count }) => ({
 //      count: count + 1
 //    }))
 //  }

//  window.onload = () => {
//   var img = document.createElement('img')
//   img.setAttribute('style', 'position:absolute')
//   img.setAttribute('src', 'wally1.png')
//   document.body.appendChild(img)
//   var xy =
// }

 handleClick = () => {
   this.setState({
     redirect: true
   })
 }

 render () {
   return (
     <React.Fragment>
     ({
         this.state.redirect ? <Redirect to='/win' />
           : <svg width={window.innerWidth} height={window.innerHeight - 200} styles={{ backgroundImage: `url(${'../../server/public/images/wally1.jpg'})` }}>
             <rect x={this.state.rect.x} y={this.state.rect.y} height="80" width="50" onClick={this.handleClick}
             //  style={{backgroundImage: `url(${'images/don_wally.jpg'})`}}
             />
           </svg>
       })
     </React.Fragment>
   )
 }
}

export default Don
