import React from 'react'
import { Container, Typography } from '@material-ui/core'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Arrow from './arrow.inline.svg';
import { motion } from 'framer-motion'

const Btn = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  gap: 1rem;
  letter-spacing: 2px;
  font-family: var(--sofia-soft);
  font-weight: 300;
  transition: all .3s;


  &::before{
    content: '';
    z-index: -2;
    position: absolute;
    display: block;
    background-color: ${({theme}) => theme.palette.secondary.main};
    border-radius: 100%;
    left:  -20px;
    width: 50px;
    height: 50px;
    transition: all .3s ease;
  }
  
  &:hover{
    transform: translateX(15px);
    
    &::before{
      width: 125%;
      border-radius: 30px;
      transition: all .5s cubic-bezier(.77, 0, .175, 1);

    }
  }
`

const Panel = styled( motion.div )`
  margin: 2rem;
  background-color: salmon;
  border-radius: 50%; 
  height: 60px;
  width: 60px;
`


const Projects = () => {
  return (
    <Container maxWidth={'md'} style={{ padding: '10rem' }} >

      <Link to={'/'}>

        <Btn>
          <Typography noWrap={true} > CASE STUDY </Typography>
          <Arrow/>
        </Btn>

        <motion.div  />

        <Panel initial={{
          opacity: 0,
          x: 0,
        }}
               whileHover={{
                 width: 200,
                 borderRadius: '50px',


                 transition: {
                 duration: .5,
                 ease: [.77, 0, .175, 1]
                 },


               }}

               animate={{
                 opacity: 1,
               }}
               transition={ {
                 duration: .3,
               } }
        />

      </Link>

    </Container>
  )
}

export default Projects
