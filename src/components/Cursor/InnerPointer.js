import React from 'react'
import { motion } from "framer-motion";
import styled from "styled-components";
import { lerp } from "../../helpers/utils";
import EventUtil from "../../helpers/EventUtil";
import gsap from "gsap";

export const PointerContainer = styled(motion.div)`
  //display: g;
  position: absolute;
  //border: thin solid lightcoral;
  height: 1rem;
  width: 1rem;
  top: calc(-1rem / 2);
  left: calc(-1rem / 2);
  right: auto;
  bottom: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform;
  //transform: translate(-50%, -50%);


  p {
    
    position: absolute;
    font-family: 'shapes', serif;
    line-height: 0;
    padding: 0;
    margin: 0;
    top: -50%;
    left: -50%;
    inset: auto;
    color: rgb(120, 128, 158);
    font-size: .78rem;
    //mix-blend-mode: difference;
  }
`


class InnerPointer extends React.Component {

  events
  rotationTween


  constructor(props) {
    super(props)
    this.events = EventUtil.getInstance()

  }

  componentDidMount() {

    this.updateMousePos()

   gsap.to('.pointer .pointer-one', {
     rotation: -360,
     duration: 5 * 1.2,
     ease: 'none',
     repeat: -1
   })

    gsap.to('.pointer .pointer-two', {
      rotation: 360,
      duration: 6.6 * 1.2,
      ease: 'none',
      repeat: -1
    })
  }

  startRotationTween(){

  }

  componentWillUnmount() {}

  updateMousePos(){
    const render = () => {
      // this.lastX.set( lerp(this.lastX.get(), this.events.mousePos.x, 0.18 ))
      // this.lastY.set( lerp(this.lastY.get(),  this.events.mousePos.y, 0.18))

      gsap.to('.pointer', {
        x: this.events.mousePos.x,
        y: this.events.mousePos.y,
        duration: 0,

      })

      requestAnimationFrame(() => render())
    }

    requestAnimationFrame(() => render())
  }

  static async pointed(value){
    gsap.to('.pointer', {
      scale: value ? 3.2 :  1,
    })
  }

  static async focused(value){
    gsap.to('.pointer', {
      scale: value ? 1.2 : 1,
    })

    gsap.to('.pointer p', {
      color: value ? '#a4b5c0' : 'rgb(120, 128, 158)'
    })
  }

  render() {
    return(
        <PointerContainer className='pointer' >
          <p className='pointer-one' >h</p>
          <p className='pointer-two' >i</p>
        </PointerContainer>
    )
  }
}

export default InnerPointer
