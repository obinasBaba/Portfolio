import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { length } from "../../styles/mixins";
import { useProjectCircles } from "../../hooks/queries/useProjectCircles";
import lotti from "lottie-web";

const LottiContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  padding: 4rem;
  border-radius: 100px;
  //border: thin solid green;
  
  grid-row: 2 / 3;
  grid-column: 1/ 1;
  opacity: .3;
  
  ${length('height', 103)};
  ${length('width', 103)};
  
  ${ ({art}) => {
    
    css`
      ${art};
    `
    
  } };
  
  

  .lotti {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transition: transform 2s ease-out;

    path {
      stroke-width: 4px;
    }
  }
`


const LineArt = ( {artStyle} ) => {

  const circle1Ref = useRef(null)
  const circle2Ref = useRef(null)
  let lottiRef = useRef([])

  const { circle1, circle2 } = useProjectCircles()

  useEffect(() => {
    // return;
    // if (moRotate.get() !== 0) return

    lottiRef.current = []
    // lotti.destroy('circle-1')
    // lotti.destroy('circle-2')
    lotti.destroy()

    lottiRef.current.push(
      lotti.loadAnimation({
        name: 'circle-1',
        container: circle1Ref.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: circle1.publicURL,
      })
    )

    lottiRef.current.push(
      lotti.loadAnimation({
        name: 'circle-2',
        container: circle2Ref.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: circle2.publicURL,
      })
    )
  }, [])

  return (
    <LottiContainer  art={artStyle}>

      <motion.div
        ref={circle1Ref}
        // style={{ rotate: moRotate }}
        className="lotti lotti-1"
      />

      <motion.div
        ref={circle2Ref}
        // style={{ rotate: moRotate2 }}
        className="lotti lotti-2"
      />
    </LottiContainer>
  );
};

export default LineArt;
