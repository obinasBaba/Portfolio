import React, {useLayoutEffect, useRef} from 'react'
import styled from 'styled-components'
import Title from './Title'
import { useProjectSvg } from '../../../hooks/queries/useProjectSvg'
import { spacing } from '../../../styles/mixins'
import useHomeWorksAssets from '../../../hooks/queries/useHomeWorksAssets'
import DesignImage from './items'
import ScrollGallery from '../../../components/ScrollGallery/ScrollGallery'
import ImagesLoaded from 'imagesloaded'
import useOnScreen from '../../../hooks/useOnScreen'

const RecentDesignWrapper = styled.section`
  //min-height: 100vh;
  
  //border: thick solid saddlebrown;
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
  ];

  const containerRef = useRef(null)
  const inView = useOnScreen(containerRef, 0, '5%')


  useLayoutEffect(() => {
    // console.log('recentDesign', events.addLoader)

    // events.addLoader()

    ImagesLoaded(document.querySelectorAll('.dribble-shots'))
      .on('done',  instance => {
        // setLoadingPage(false)
        // events.finishLoading()
      })

  }, [])


  

  return (
    <RecentDesignWrapper id='#design'  data-scroll-section ref={containerRef}>

      <Title circledText={ circledText.publicURL }
             dribbleRed={ dribbleRed.publicURL } />

          <ScrollGallery>
            {imageList.map((item, index) => {
              return <DesignImage images={item} key={item[0].name + index} />;
            })}
          </ScrollGallery>


    </RecentDesignWrapper>
  )
}

export default RecentWorks;
