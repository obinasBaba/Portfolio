import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import { useRecentDesignAssets } from '../../../hooks/queries/useRecentDesignAssets'
import { spacing } from '../../../styles/mixins'
import useHomeWorksAssets from '../../../hooks/queries/useHomeWorksAssets'
import DesignImage from './items'
import ScrollGallery from '../../../components/ScrollGallery/ScrollGallery'

const RecentDesignWrapper = styled.div`
  ${spacing('mb', 16)};
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
    <RecentDesignWrapper id='#design' >

      <Title circledText={ circledText.publicURL }
             dribbleRed={ dribbleRed.publicURL } />

      <ScrollGallery step={4}>
        {imageList.map(item => {
          return <DesignImage images={item} key={item[0].name} />;
        })}
      </ScrollGallery>

    </RecentDesignWrapper>
  )
}

export default RecentWorks;
