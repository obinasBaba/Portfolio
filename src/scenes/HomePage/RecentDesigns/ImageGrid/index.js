import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import {length, spacing} from '../../../../styles/mixins'

const ImageWrapper = styled.div`
  flex: 0 0 100%;
  max-width: calc( 100vw / 64 * 31 );
  margin-right: calc( 100vw / 64 * 1 );

  ////todo-start - figure this out
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  -o-transition-property: transform;
  //todo-end
  
  &.item{
    
  }

  &:nth-child(2n) {  //starting from the parent every even child
    max-width: calc( 100vw / 64 * 20 );
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    
    //every first-child of the parent of .image,// this is equal with ( parent > :first-child )
    .image:first-child {  
      margin-bottom: calc( 100vw / 64 * 1 );
    }
    
    .image:nth-child(n + 2){
      width: calc( 50% - ( (100vw / 64) / 2) );
    }
  }

  @media screen and (min-width: 1600px) {
  //@include hl-max-width(620px);
    
    ${ length( 'max-width', 62 ) };
    
    &.item {
    //@include hl-margin(right, 20px);
      ${ spacing( 'mr', 2 ) };
    }
    &:nth-child(2n) {
      
    //@include hl-max-width(400px);
      ${ length( 'max-width', 40 ) };

      .image:first-child {
      //@include hl-margin(bottom, 20px);
        ${ spacing('mb', 2) };
      }
      .image:nth-child(n + 2) {
        //width: calc(50% - 10px * var(--coef-size));
      }
    }
  }
  
  .image{
    width: 100%;
  }
`

const DesignImage = ( { images } ) => {

  return (
    <ImageWrapper>
      {
        images.map( (imgData, index) =>
          <GatsbyImage alt={imgData.name}
                       key={ index }
                       className={'image dribble-shots'}
                       objectFit='cover'
                       image={ getImage( imgData ) }/> )

      }
    </ImageWrapper>
  )
}

export default DesignImage
