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

 handleClick = () => {
   this.setState({
     redirect: true
   })
 }

 render () {
   const styles = {
     paperContainer: {
       backgroundImage: `url(${'/images/wally1.jpg'})`
     }
   }
   return (
     <React.Fragment>
       ({
         this.state.redirect ? <Redirect to='/win' />
           : <svg className='crop-shapes' width={window.innerWidth} height={window.innerHeight - 200} style={styles.paperContainer}>
             <defs>
               <pattern id="img1" patternUnits="userSpaceOnUse" width="40" height="40">
                 <image className='twombly' xlinkHref="http://www.simpleimageresizer.com/_uploads/photos/ce98e820/don_face_2_28.png"/>
               </pattern>
             </defs>

             <rect x={this.state.rect.x} y={this.state.rect.y} width="40" height="40" stroke="black" fill="url(#img1)" filter="url(#sparklin)"/>
           </svg>
       })
       {

       }
     </React.Fragment>
   )
 }
}

export default Don
