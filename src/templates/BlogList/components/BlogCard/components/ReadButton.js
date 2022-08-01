import React from "react";
import styled, { css } from "styled-components";
import { Typography } from "@material-ui/core";
import { length, spacing } from "@/styles/mixins";

const ReadButtonContainer = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  margin-left: auto;
  margin-top: auto;

  ${( { styl } ) => css`

    ${styl};

  `};

  a.link {
    padding: 0;
    margin: 0;
    align-self: center;

    display: grid;
    place-items: center;
  }

  ${spacing( "pr", 0.5 )};
  ${spacing( "pb", 0.5 )};

  .read-txt {
    position: relative;
    grid-row: 1 /1;
    grid-column: 1/ 1;
    //z-index: 0;
    //border: thin solid red;

    ${spacing( "p", 1.2 )};


    p {
      letter-spacing: 0.8px;
      text-shadow: 0 0.1em 0.3em rgba(0, 0, 0, 0.76);
      margin: 0;
      padding: 0;
      text-transform: capitalize;
      line-height: 0;
    }


  }

  .bg {
    grid-row: 1 /1;
    grid-column: 1/ 1;
    background-color: var(--theme);
    border-radius: 50%;
    transform: translateX(-50%);

    ${length( "width", 5 )};
    ${length( "height", 5 )};
  }
`;

const ReadButton = ( { txt, to, index, style } ) => {

  return (
    <ReadButtonContainer data-tooltip
                         styl={style}
                         data-pointer="focus"
                         data-pointer-color="#02021e"

    > <a rel="noreferrer" target="_blank" href={to} className="link"

    >
      <div className="bg" />

      <div className={`read-txt`}>

        <Typography variant="body2">{txt}</Typography>


      </div>
    </a>
    </ReadButtonContainer>
  );
};

export default ReadButton;
