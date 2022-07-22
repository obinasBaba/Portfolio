import React from "react";
import styled from "styled-components";
import Title from "./Title";
import ScrollGallery from "../../../components/ScrollGallery/ScrollGallery";
import { spacing } from "../../../styles/mixins";

const RectDesignContainer = styled.section`
  //min-height: 100vh;
  //border: thin solid red;

  ${spacing( "pt", 20 )};

  background-image: linear-gradient(to top,
  rgba(7, 33, 66, 0),
  rgba(6, 18, 32, 0),
  rgba(2, 11, 22, 0),
  rgba(2, 11, 22, .2),
  rgba(2, 11, 22, .4),
  rgb(4, 14, 23));


`;

function RecentWorks(){


  return (
    <RectDesignContainer id="#design"
      // data-scroll-section={true}
    >
      <Title />
      <ScrollGallery />
    </RectDesignContainer>
  );
}

export default RecentWorks;
