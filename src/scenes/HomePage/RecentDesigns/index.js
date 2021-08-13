import React, {useContext, useLayoutEffect} from 'react'
import styled from 'styled-components'
import Title from './Title'
import { useRecentDesignAssets } from '../../../hooks/queries/useRecentDesignAssets'
import { spacing } from '../../../styles/mixins'
import useHomeWorksAssets from '../../../hooks/queries/useHomeWorksAssets'
import DesignImage from './items'
import ScrollGallery from '../../../components/ScrollGallery/ScrollGallery'
import ImagesLoaded from 'imagesloaded'
import {AppStateContext} from '../../../contexts/AppStateContext'
import Subscribers from '../../../helpers/Subscribers'

const RecentDesignWrapper = styled.div`
  ${spacing('mb', 13)};
`

const RecentWorks = () => {

  const { circledText, dribbleRed } = useRecentDesignAssets();
  const { loadingPage, setLoadingPage, events } = useContext(AppStateContext)
  // const loadingEvents = Subscribers.getInstance()


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

  useLayoutEffect(() => {
    console.log('recentDesign', events.addLoader)

    events.addLoader()

    ImagesLoaded(document.querySelectorAll('.dribble-shots'))
      .on('done',  instance => {
        // setLoadingPage(false)
        events.finishLoading()
      })

  }, [])
  

  return (
    <RecentDesignWrapper id='#design' >

      <Title circledText={ circledText.publicURL }
             dribbleRed={ dribbleRed.publicURL } />

      <ScrollGallery step={4}>
        {imageList.map((item, index) => {
          return <DesignImage images={item} key={item[0].name + index} />;
        })}
      </ScrollGallery>

    </RecentDesignWrapper>
  )
}

export default RecentWorks;
