import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { text } from "../../styles/mixins";


const PointerContainer = styled( motion.div )`
  //display: g;
  position: absolute;
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
    color: var(--theme);

      // ${text( 3 )};
    font-size: 3vmax;

    &.outer-one {
      animation: rotate-one 4s linear infinite;

      @keyframes rotate-one {
        from {
          transform: rotate(0deg)
        }
        to {
          transform: rotate(-360deg)
        }
      }
    }

    &.outer-two {
      animation: rotate-two 6s linear infinite;

      @keyframes rotate-two {
        from {
          transform: rotate(0deg)
        }
        to {
          transform: rotate(360deg)
        }
      }
    }
  }
`

function OuterPointer(){
    return (
        <PointerContainer className='pointer outer'>
            <p className='outer-one'>f</p>
            <p className='outer-two'>g</p>
        </PointerContainer>
    );
}


export default OuterPointer;
