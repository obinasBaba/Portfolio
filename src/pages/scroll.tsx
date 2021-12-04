import React, {useEffect} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

const ST = styled.div`
  display: flex;
  flex-flow: column;
  
  border: thick solid red;
  min-height: 200vh;
  padding: 5rem;
  margin: 8rem 5rem 5rem;

  .in-view{
    padding: 4rem;
    background-color: bisque;
  }

`

const variants = {
  hover: {
    
  }
}

const ScrollTrigger = () => {


  return (
    <ST className='sContainer' >
      <motion.div className='in-view' />
    </ST>
  )
}

export default ScrollTrigger
