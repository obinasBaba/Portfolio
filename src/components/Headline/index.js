import React from "react";
import styled from "styled-components";
import { GradientText } from "../GradientText";
import { spacing, text } from "../../styles/mixins";

const TitleContainer = styled.header`
  text-align: center;
  margin: 0 auto;
  width: min-content;
  max-height: 225px;

  ${( { mb } ) => mb ? spacing( "mb", mb ) : spacing( "mb", 0 )};

  & > :last-child {
    margin-right: 10px;
  }

  .subtitle {
    ${text( 1 )};
    letter-spacing: -.3px;
  }

`;


function HeadlineTitle( { title, subtitle, mb, clsName, ...props } ){


  return (
    <TitleContainer {...props} mb={mb} className={clsName}>
      <GradientText variant="h1"
                    noWrap>
        {title}
      </GradientText>

      <GradientText className="subtitle"
                    align="right" variant="body1" noWrap>
        {subtitle}
      </GradientText>


    </TitleContainer>
  );
}

export default HeadlineTitle;
