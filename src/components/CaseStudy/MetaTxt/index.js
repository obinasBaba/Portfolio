import React from "react";
import styled, { css } from "styled-components";
import { Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import { spacing } from "../../../styles/mixins";
import ResponsiveContainer from "../../ResponsiveContainer";
import { mediumUp } from "../../../styles/mixins/breakpoints";
import { container, wrapper, desc, key, value } from "./metaintro.module.scss";

const MetaContainer = styled( ResponsiveContainer )`
  //display: flex;
  //justify-content: start;
  //flex-flow: column;

  ${spacing( "mt", 6 )};
  ${spacing( "mb", 10 )};


`;

export const MetaTextContainer = styled( motion.ul )`
  //border: thin solid red;

  max-width: 100%;
  display: flex;
  flex-flow: wrap;
  align-items: flex-start;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;
  color: #02021e;
  //margin: 0 0 0 12%;

  //border: thin solid red;

  ${spacing( "mt", 16 )};

  ${mediumUp( css`
    max-width: 70%;
    justify-content: flex-start;
  ` )};

  li {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: center;
    //border: thin solid teal;

    flex-basis: 33%;


      // ${spacing( "mr", 10 )};
    ${spacing( "mt", 4.5 )};

    &:not(:last-child) {
    }
  }
`;

export const Q = styled( Typography )`
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: uppercase;
`;

export const A = styled( Typography )`
  //line-height: 160%;
  letter-spacing: 0;
  font-weight: 100;

    // ${spacing( "text-indent", 1 )};
`;

const MetaTxt = () => {
  const about = [
    { q: "Role -", a: "UI design / Coding" },
    { q: "Period -", a: "End 2020" },
    { q: "Context -", a: "Illustration, Illustration and Lettering" },
    { q: "tools -", a: "figma, illustrator, react, javascript" },
    { q: "clients -", a: "Vigoza inc." }
  ];

  return (
    <ResponsiveContainer className={container}>

      <Typography variant="h1"> Introduction </Typography>


      <Typography className={desc}>
        Vigoza is a full-service digital agency that builds immersive user experience.
        The Team create an exceptional visualization and thought-out functionality.
        The studio develops the products people appreciate all around the world.
        This project is made to make it easy to witness and follow-up their work and to keep their clients
        more close
      </Typography>

      <motion.ul className={wrapper}>
        {about.map( ( { q, a } ) => (
          <li key={q}>
            <Typography noWrap className={key}  variant="h6"> {q}</Typography>
            <Typography className={value} variant="subtitle"> {a} </Typography>
          </li>
        ) )}
      </motion.ul>


    </ResponsiveContainer>
  );
};

export default MetaTxt;
