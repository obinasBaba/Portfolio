import styled from 'styled-components'
import { motion, Variants } from "framer-motion";
import * as React from "react";

const ST = styled.div`
  display: flex;
  flex-flow: column;

  border: thick solid red;
  min-height: 200vh;
  padding: 5rem;
  margin: 8rem 5rem 5rem;

  .in-view {
    padding: 4rem;
    background-color: bisque;
  }
`

const variants : Variants = {
  hover: {
    backgroundColor: 'crimson'
  }
}

const ScrollTrigger = () => {


  return (
    <ST className='sContainer' >
      {/*<AnimateSharedLayout>*/}
        <motion.div className='in-view'
                    variants={variants}
                    whileHover='hover'
        />
      {/*</AnimateSharedLayout>*/}

    </ST>
  )
}

export default ScrollTrigger
