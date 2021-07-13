import React from 'react'
import styled, {css} from 'styled-components'
import {Container, Typography} from '@material-ui/core'
import {mediumUp, spacing} from '../../styles/mixins'

const FooterMetaContainer = styled( Container )`
  display: flex;
  
  justify-content: space-between;
  flex-flow: column;
  //border: thin solid yellow;
  
  ${spacing('mt', 5)};
  
  ${ mediumUp( css`
    flex-flow: row wrap;
  ` ) };
`

const MetaColumn = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  //border: thin solid lightcoral;
  
  & > :first-child{
    ${ spacing('mb', 1.5) };
    font-weight: bolder;
    letter-spacing: 1px;
  }
  
  & > :not(:first-child){
    ${ spacing('mt', .5) };
    font-weight: 300;
    letter-spacing: 1.2px;

  }
`

const FooterMeta = () => {
  const data = [
    ['Home', 'about', 'projects', 'blogs', 'contact'],
    ['Dribble', 'LinkedIn', 'Github', 'Readers-corner'],
    ['hi@henzzo.io', '+251 923 3655 39' ],
    ['Addis-Abeba,', '2020 Pop,', 'Ethiopia,' ],
  ]

  return (
    <FooterMetaContainer maxWidth="lg" disableGutters={true} >

      {
        data.map((c, i) => {
            return (
              <MetaColumn key={ Math.random() }>
                <Typography variant='h5' className='title'>{
                  i === 0 && 'Explore' || i === 1 && 'Social'
                  || i === 2 && 'Contact' || i === 3 && 'Henzzo.io'
                }</Typography>
                { c.map((t, i) => <Typography key={Math.random()} variant='subtitle2' >{t}</Typography>) }
              </MetaColumn>

            )
        })
      }


    </FooterMetaContainer>
  )
}

export default FooterMeta
