import React from 'react'
import { ListItem } from './index'
import { useAnimation } from 'framer-motion'
import styled from 'styled-components'
import { text } from '../../../../../styles/mixins'
import { GradientText } from '../../../../../components/GradientText'

const itemVariant = {
  initial: {},
  animate: {},
  exit: {},
  hover(c){

  },
  hoverEnd: {}
}

const titleVariant = {
  initial: {},
  animate: {},
  exit: {},
  hover: {

    transition: {
      staggerChildren: .05,
      staggerDirection: .5
    }
  },
  hoverEnd: {}
};

const letterVariant = {
  initial: {},
  animate: {},
  exit: {},
  hover:{
    y: [null, -30, 0],
    opacity: [1, 0, 1],
    transition: {
      duration: .2,
    },
  },
  hoverEnd: {}
};

const Tags = styled.div`
  display: flex;
  align-items: center;
  //flex-flow: column;
  gap: 1rem;
  ${ text(.7) };
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 0;
`

const DescTxt = styled.p`
  //font-weight: 300;
`

const Item = ( { onHoverStart, title, customData} ) => {

  const itemController = useAnimation();


  return (
    <ListItem variants={itemVariant}
              animate={itemController}
              onHoverStart={() => {
                onHoverStart();
              }}
    >
      <GradientText variant='h3' className='title' >
        {title}
      </GradientText>
      <Tags>
        <p>Identity</p>
        <p>Cms</p>
        <p>Prototyping</p>
        <p>System</p>
      </Tags>

      <DescTxt>
        a fairly unique movie streaming service that intends to cover the niche of rather
        uncoventional treasures.
      </DescTxt>

    </ListItem>
  )
}

export default Item
