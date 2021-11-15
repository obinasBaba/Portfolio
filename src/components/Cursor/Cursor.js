import React from 'react'
import styled from 'styled-components'
import EventUtil from '../../helpers/EventUtil'
import InnerPointer from './InnerPointer'
import OuterPointer from './OuterPointer'
import MagnetElement from '../../helpers/MagnetElement'
import gsap from 'gsap'

let show = false

const selectorCheck = new Map()

const CursorContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  pointer-events: none;
  z-index: 30;
  opacity: 0;

  & * {
    pointer-events: none;
  }
`

class Cursor extends React.Component {

  static Instance = null
  static focusing
  static pointing
  events
  props

  constructor (props) {
    super(props)

    this.events = EventUtil.getInstance()
    this.props = props

    this.handleLeave = this.handleLeave.bind(this)
    this.handleHover = this.handleHover.bind(this)

  }

  set isFocused (value) {
    Cursor.focusing = value

    InnerPointer.focused(value)
    OuterPointer.focused(value)
  }

  set isPointed (value) {
    Cursor.pointing = value

    gsap.to('.cursor-container',
      {
        zIndex: value ? 8 : 30
      })

    InnerPointer.pointed(value)
    OuterPointer.pointed(value)
  }

  static getInstance (canvas) {

    if ( this.Instance === null ) {
      this.Instance = new Cursor()
      return this.Instance
    } else {
      return this.Instance
    }
  }

  static hideOnScroll () {
    if ( !show ) return

    gsap.to('.cursor-container',
      {
        opacity: 0,
        duration: 1.2,
        onComplete () {
          show = false
        }
      })
  }

  componentDidMount () {

    this.refreshEventListeners('[data-pointer]')

    window.addEventListener('mousemove',
      () => {
        if ( show ) return

        gsap.to('.cursor-container',
          {
            opacity: 1,
            duration: 1.2,
            onComplete () {
              show = true
            }
          },)
      })
  }

  componentWillUnmount () {
    selectorCheck.clear()
  }

  updateMousePos () {}

  handleHover = e => {
    // console.log('enter hover')
    let type = e.currentTarget.dataset.pointer;

    if ( type === 'stuck' ) {
      const rect = e.currentTarget.getBoundingClientRect()
      let x = Math.round(rect.left + rect.width / 2)
      let y = Math.round(rect.top + rect.height / 2)
      // cursor.startStuck(x, y)
    } else if ( type === 'focus' ) {
      this.isFocused = true;

    } else {
      document.body.classList.add('canvas-hover')
      this.isPointed = true
    }
  }

  handleLeave = () => {
    this.isPointed = false;
    this.isFocused = false;
  }

  refreshEventListeners (selector) {

    if ( selectorCheck.get(selector) ) return
    selectorCheck.set(selector, true)

    const pointerElements = document.querySelectorAll(selector)
    console.log(pointerElements)

    pointerElements.forEach(element => {
      element.removeEventListener('mouseenter', this.handleHover)
      element.removeEventListener('mouseleave', this.handleLeave)

      element.addEventListener('mouseenter', this.handleHover)

      const type = element.dataset.pointer

      if ( type === 'magnet' ) {
        // console.log(element)
        const attraction = element.dataset.magnetAttraction ?? 1
        const distance = element.dataset.magnetDistance ?? 0.7
        new MagnetElement({
          element: element,
          stop: attraction,
          distance: distance,
        }).on('leave',
          () => {
            //if it is magnet no mouseleave needed
            // console.log('LEAVE invoked')
            this.isPointed = false
            // document.body.classList.remove('canvas-hover')
          })
      } else {
        //only for pointer and focused add mouseleave
        element.addEventListener('mouseleave', this.handleLeave)
      }
    })
  }

  render () {

    console.log('cursor rendered : ', this.props);

    return (
      <CursorContainer className='cursor-container'>
        <InnerPointer />
        <OuterPointer />
      </CursorContainer>
    )
  }
}

export default Cursor
