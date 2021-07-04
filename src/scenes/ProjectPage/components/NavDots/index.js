import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {AnimateSharedLayout, motion} from 'framer-motion'
import {spacing} from '../../../../styles/mixins'
import {BigDot, DottedLine, Thumb} from './Components/NavTools'
import ThumbAndDot from './Components/ThumbAndDot'

const NavContainer = styled( motion.div )`
  position: fixed;
  z-index: 9999;
  ${ spacing('ml', 4) };
  top: 50%;
  left: 0;
  transform: translateY(-45%);
  align-self: flex-start;
  
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`

const NavDots = React.forwardRef( (props, ref) => {



  const [active, setActive] = useState(0);
  const [anchors, setAnchors] = useState(['#one', '#two', '#three', '#four'])

  useEffect(() => {

    ref.current = {
      setAnchors: setActive,
    }

    }, [])
  

  return (

      <NavContainer >

        <AnimateSharedLayout type="crossfade">


        {
          anchors.map( (anchor, i) => <>
            <ThumbAndDot anchor={anchor} hidden={i === active} index={i} onClick={ {set: setActive} } />
            { i !== 3 && <DottedLine/>  }
          </> )
        }

        </AnimateSharedLayout>


      </NavContainer>


  )
})

export default NavDots
