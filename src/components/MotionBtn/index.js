import React, { useRef } from "react";
import { Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "gatsby";
import { spacing } from "../../styles/mixins";

const Btn = styled( motion.div )`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  //cursor: pointer;
  width: fit-content;
  letter-spacing: 2px;
  font-weight: 300;
  transition: all 0.3s;
  padding: 0.7rem;
  z-index: 2;
  pointer-events: auto;
  //border: thin solid red;

  ${spacing( "m", 1 )};
  ${spacing( "mr", 1.9 )};

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    display: block;
    background: ${( { clr } ) => (clr || "var(--medium-blue-color)")};
    border-radius: 50%;

    ${spacing( "left", -1 )};

    width: 50px;
    height: 50px;
    transition: all 0.3s ease;
  }


  & .btn-txt {
    margin: 0;
    padding: 0;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    //line-height: 0;
  }


  &:not(.no-hover):hover {
    transform: translateX(15px);
    color: white;


    &::before {
      width: 115%;
      border-radius: 30px;
      transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1), transform .5s cubic-bezier(.77, 0, 0.175, 1) .05s;
      box-shadow: 0 0 2.5rem var(--medium-blue-color);
      transform: scale(1.25);
    }
  }

  a {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
    //cursor: none;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
  }
`;


function MotionBtn( {
  text = "CASE-STUDY",
  to,
  state,
  fontLarge,
  clr,
  margin = true,
  onClick,
  toolTipText,
  ...props
} ){
  const btnRef = useRef( null );

  return (<Btn
    {...props}
    margin={margin.toString()}
    clr={clr}
    data-pointer="focus"
    // data-pointer-color="#02021e"
    data-tooltip
    data-tooltip-text={toolTipText}
    ref={btnRef}
    onClick={() => {
      if ( onClick ) {
        onClick();
        btnRef.current.classList.add( "no-hover" );
      }
    }}
  >
    {to && (<Link
      to={to}
      aria-label={`${text}  ${to}`}
      state={state}
    />)}

    <Typography
      variant="body1"
      className="btn-txt"
      style={{
        letterSpacing: "3px", textShadow: "0.1em 0.1em 0.3em #000"
      }}
      noWrap
    >
      {text}
    </Typography>
  </Btn>);
}

export default MotionBtn;
