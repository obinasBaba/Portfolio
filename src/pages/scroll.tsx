import styled from 'styled-components'
import { motion, useCycle, Variants } from "framer-motion";
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

  const [x, cycleX] = useCycle(0, 50, 100)

  return (
    <ST className='sContainer' >
      {/*<AnimateSharedLayout>*/}
        <motion.div className='in-view'
                    animate={{ x: x }}

                    onTap={() => cycleX()}
        />
      {/*</AnimateSharedLayout>*/}

    </ST>
  )
}

export default ScrollTrigger
