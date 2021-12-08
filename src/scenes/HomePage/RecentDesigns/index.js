import React, { useEffect, useRef } from "react";
import styled from 'styled-components'
import Title from './Title'
import { useProjectSvg } from '../../../hooks/queries/useProjectSvg'
import useHomeWorksAssets from '../../../hooks/queries/useHomeWorksAssets'
import ScrollGallery from '../../../components/ScrollGallery/ScrollGallery'
import useOnScreen from "../../../hooks/useOnScreen";

const RecentDesignWrapper = styled.section`
  //min-height: 100vh;
  //border: thin solid red;
`

const RecentWorks = () => {

  const { circledText, dribbleRed } = useProjectSvg();

  const {
    Art,
    eScooter,
    Web,
    Hommy,
    Investments,
    Lazy,
    Starbank,
    Teampoint,
    Travel,
    Tude,
    Realty,
    North,
  } = useHomeWorksAssets();

  const imageList = [
    [Web],
    [Investments, Travel, Starbank],
    [eScooter],
    [Art, Lazy, Teampoint],
    [North],
    [Realty, Hommy, Tude],
    [Web],

  ];

  // const inView = useOnScreen(containerRef, 0, '5%')

  useEffect(() => {

    // window.locoInstance && window.locoInstance.update()

  }, [])

  return (
    <RecentDesignWrapper id='#design' data-scroll-section >

      <Title circledText={circledText.publicURL} dribbleRed={dribbleRed.publicURL} />
      <ScrollGallery imageRow={imageList} speed={4} target={1} txt='Apocalypse' />

    </RecentDesignWrapper>
  )
}

export default RecentWorks;
