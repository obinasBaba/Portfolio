import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import { useRecentDesignAssets } from '../../../hooks/queries/useRecentDesignAssets'
import { spacing } from '../../../styles/mixins'
import useHomeWorksAssets from '../../../hooks/queries/useHomeWorksAssets'
import Items from './items'
import ScrollGallery from '../../../components/ScrollGallery/ScrollGallery'

const RecentDesignWrapper = styled.div`
  border: thin solid crimson;
  ${spacing('mb', 20)}
`

const RecentWorks = () => {

  const { circledText, dribbleRed } = useRecentDesignAssets();
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
  ];


  return (
    <RecentDesignWrapper>

      <Title circledText={ circledText.publicURL }
             dribbleRed={ dribbleRed.publicURL } />

      <ScrollGallery step={4}>
        {imageList.map(item => {
          return <Items images={item} key={item[0].name} />;
        })}
      </ScrollGallery>

    </RecentDesignWrapper>
  )
}

export default RecentWorks;
