import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const ImageWrapper = styled.div`
  flex: 0 0 100%;
  max-width: calc( 100vw / 64 * 31 );
  margin-right: calc( 100vw / 64 * 1 );
  
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
      width: calc( 50% - ( 100vw / 64 / 2) );
    }
  }

  /*@media screen and (min-width: 1600px) {
  @include hl-max-width(620px);
    &.item {
    @include hl-margin(right, 20px);
    }
    &:nth-child(2n) {
    @include hl-max-width(400px);
      .image:first-child {
      @include hl-margin(bottom, 20px);
      }
      .image:nth-child(n + 2) {
        width: calc(50% - 10px * var(--coef-size));
      }
    }
  }*/

  
  
  .image{
    width: 100%;
  }
`

const Items = ( { images } ) => {

  return (
    <ImageWrapper>
      {
        images.map( (imgData, index) =>
          <GatsbyImage alt={imgData.name}
                       key={ index }
                       className={'image'}
                       image={ getImage( imgData ) }/> )

      }

    </ImageWrapper>
  )
}

export default Items
