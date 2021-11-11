import React from 'react'
import { motion } from "framer-motion";
import styled from "styled-components";
import { lerp } from "../../helpers/utils";
import EventUtil from "../../helpers/EventUtil";
import gsap from "gsap";

export const OuterContainer = styled(motion.div)`
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
    //font-weight: bold;
    font-size: 3.6rem;
    //mix-blend-mode: difference;
  }
`


class OuterPointer extends React.Component {

  events
  rotationTween
  static pointing


  constructor(props) {
    super(props)
    this.events = EventUtil.getInstance()

  }

  componentDidMount() {

    this.updateMousePos()

    gsap.to('.outer .outer-one', {
      rotation: -360,
      duration: 5.8 * 1.2,
      ease: 'none',
      repeat: -1
    })

    gsap.to('.outer .outer-two', {
      rotation: 360,
      duration: 7.5 * 1.2,
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

      gsap.to('.outer', {
        x: this.events.mousePos.x ,
        y: this.events.mousePos.y,
        duration: OuterPointer.pointing ? 0 : 1,
        ease: OuterPointer.pointing ? 'none' : 'power2.out'

      })

      requestAnimationFrame(() => render())
    }

    requestAnimationFrame(() => render())
  }

  static async pointed(value){
    OuterPointer.pointing = value
    gsap.to('.outer', {
      scale: value ? .78 : 1,
      // duration: 1
    })
  }

  static async focused(value){
    gsap.to('.outer', {
      scale: value ? 0 : 1,
      opacity: value ? 0 : 1
    })
  }


  render() {
    return(
      <OuterContainer className='outer' >
        <p className='outer-one' >f</p>
        <p className='outer-two' >g</p>
      </OuterContainer>
    )
  }
}

export default OuterPointer
