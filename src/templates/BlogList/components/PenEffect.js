import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { motion, useSpring, useTransform } from "framer-motion";
<<<<<<< Updated upstream
import { basicVariants, transition } from "../../../helpers/variants";
import { MotionValueContext } from "../../../contexts/MotionStateWrapper";
=======
import { basicVariants, transition } from "@/helpers/variants";
import { MotionValueContext } from "@/contexts/MotionStateWrapper";
>>>>>>> Stashed changes

const penVariant = {
  ...basicVariants,
  animate: {
    opacity: 0.7
  }
};

const PenContainer = styled( motion.div )`
  position: fixed;
  top: 17%;
  left: 1%;
  bottom: -14%;
  pointer-events: none;
  //color: #c9d8e0;
  //z-index: -1;
  //border: thin solid rebeccapurple;
`;

function PenEffect(){


  const { moScroll } = useContext( MotionValueContext );
  const progress = useTransform( moScroll.y,
    [0, moScroll.limit.get()], [0, 1] );

  const yTransform =
    useTransform( progress, [0, 1], [0, -145] );

  const y = useSpring( yTransform, {
    mass: .5, damping: 10, stiffness: 50
  } );

  const rTransform = useTransform( progress,
    [0, .4, .45, .95],
    [0, -15, 0, -15] );
  const rotate = useSpring( rTransform, {
    mass: .5, damping: 10, stiffness: 50
  } );

  const [refresh, setRefresh] = useState( false );

  useEffect( () => {

    setRefresh( true );

  }, [] );


  return (
    <PenContainer style={{ y, rotate }}
                  variants={penVariant}
                  transition={{ ...transition, delay: .5 }}
                  initial="initial"
                  animate="animate"
                  exit="exit"
    >


      <svg xmlns="http://www.w3.org/2000/svg"
           width="100%" height="100%"
           viewBox="0 0 323.091 369.629">
        <defs>
          <linearGradient id="linear-gradient" x1="0.033" y1="1" x2="1.262" y2="0.319"
                          gradientUnits="objectBoundingBox">
            <stop offset="0" stopColor="#5d6c7b" />
            <stop offset="0.382" stopColor="#a4b5c0" />
            <stop offset="1" stopColor="#c9d8e0" />
          </linearGradient>
        </defs>
        <g id="pen" transform="translate(-122.469 460.082)">
          <path id="Path_119"
                d="M428.2-458.5c-3.5,1.5-9.9,5.9-33.7,22.9-22.1,15.7-29.1,21.3-33.7,26.6-2.4,2.8-4.6,5-5,5-.7,0,7.3-14.8,10.4-19.3,2.9-4,1.3-3.3-5.6,2.5-25.2,21.5-61.6,56.5-82.8,79.7-8.9,9.8-9.5,10.2-9,7,.5-3.1.3-3.3-1.1-2-3,2.4-23.4,27.8-30.7,38.1-11.4,16.1-19,31.8-19,39.3,0,1.8-1.3,4.8-3.4,7.6-3.4,4.5-13.6,22-14.9,25.4-.9,2.5-1.9,2.1-6.9-2.3l-4.5-3.9-10.2,12.8c-9.4,11.8-10.6,12.9-14.2,13.5a12.371,12.371,0,0,0-6,2.7c-1.9,1.9-2.1,2.9-1.6,9.2l.6,7-12.8,16.1c-17.5,22-19.2,24.6-18.5,26.8,1.2,4,.4,20.5-1.5,27.8-1,4.1-1.8,7.6-1.6,7.8.3.3,5.8-9,12.5-20.9,2.9-5.2,3.4-7,2.7-8.7-1.2-2.7-.4-4.7,2.6-6.7,5.3-3.4,10.8,2.6,7.3,8-.9,1.4-2.5,2.5-3.5,2.5-1.2,0-4.9,4.5-11,13.5-5.1,7.4-8.8,13.5-8.4,13.5.5,0,2.7-1.8,4.8-4.1,5.9-6,17.9-13.7,24.6-15.7,6.5-1.9,6-1.1,14.4-21.7,2-5,5-12.2,6.6-16.1l3-7.1,8.4-1.2c11.1-1.7,14-3.7,13.2-9.6-.5-3.6,0-5.1,3.8-11.9a87.817,87.817,0,0,0,4.5-8.3,56.308,56.308,0,0,1,3.5-6.4c1.9-3.3,3.5-6.1,3.5-6.3s-2.8-1.4-6.1-2.7c-3.4-1.3-6.3-2.9-6.6-3.6s2.8-5.1,6.9-9.9c4-4.7,9.1-10.8,11.3-13.5,3-3.6,4.7-4.8,6.9-4.8,12-.3,40.7-13.5,83.6-38.6,26.6-15.5,41.8-25.4,35.5-23-4,1.5-8.7,2.6-9.1,2.2-.2-.2,7.6-6.4,17.3-13.8,34.8-26.3,55.3-43.1,53.5-43.7-.7-.2-4.7,1.5-9,3.8-8.5,4.5-8.9,5.1,7.5-9.1,9.4-8.1,24.1-25.3,29.4-34.4,3.9-6.7,7.5-18.4,8.9-28.8C447.6-454.9,441-464,428.2-458.5ZM417-425.6c0,.3-6.6,5.3-14.7,11.2-22.5,16.3-52,38.8-67.8,51.5-45.5,36.8-88.7,78.4-103.4,99.7-1.3,1.8-2.6,3.1-2.9,2.8-.8-.8,7.5-12.9,15.3-22.1,14.1-16.9,39.9-42.1,62.5-61,5.2-4.4,9.7-8.2,10-8.5,1.4-1.6,32.2-25.8,44-34.6,14.9-11.1,22.5-16.4,42.7-30.2C416.2-425.9,417-426.4,417-425.6Z"
                fill="url(#linear-gradient)" />
          <path id="Path_120"
                d="M423.8-120.3a2.026,2.026,0,0,0,1.9-.1c.4-.3-.2-.6-1.3-.5C423.3-120.9,423-120.6,423.8-120.3Z"
                fill="url(#linear-gradient)" />
          <path id="Path_121" d="M414.8-119.3a16.945,16.945,0,0,0,4.5,0c1.2-.2.2-.4-2.3-.4S413.5-119.5,414.8-119.3Z"
                fill="url(#linear-gradient)" />
          <path id="Path_122"
                d="M389.3-117.4c-8.4.8-16.4,2.2-19.5,3.3-35.3,12.9-33.4,12.4-49.3,12.4-12.4.1-14-.2-36-5.6-16.7-4.1-26.4-5.9-35.5-6.6-6.9-.6-18.1-1.8-25-2.7-14-1.8-26.4-1.4-35,1.2-3,.8-9.9,4.1-15.3,7.1-8.7,4.9-10.6,5.6-16.8,6.1a111.541,111.541,0,0,1-17.5-.8c-5.7-.7-10.7-1.1-10.9-.8-.3.3,4.9,1.5,11.5,2.8,17.1,3.2,23.5,2.6,35.4-3.3,12.2-6.2,15-6.9,26.7-6.9,7.7,0,15.7,1.1,34.2,4.7,23.1,4.4,31.1,6.5,51,13.4,4.9,1.7,9.2,2.9,9.6,2.6.5-.2,8-.6,16.7-.9,11.4-.3,18.2-1,23.9-2.4,11.9-3,31.4-10.9,35.9-14.4,3.4-2.7,5.3-3.3,16.4-4.9,14.8-2.2,16.4-2.7,9.7-2.9-4.8-.2-4.6-.3,3-1.5C413-119.1,407-119.1,389.3-117.4Z"
                fill="url(#linear-gradient)" />
        </g>
      </svg>

    </PenContainer>
  );
<<<<<<< Updated upstream
};
=======
}
>>>>>>> Stashed changes

export default PenEffect;
