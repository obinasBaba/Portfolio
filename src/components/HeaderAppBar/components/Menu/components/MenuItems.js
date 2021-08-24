import React, {useContext} from 'react'
import useMenuAssets from '../../../../../hooks/queries/useMenuAssets'
import styled, { css } from 'styled-components'
import {largeUp, mediumDown, mediumUp, text} from '../../../../../styles/mixins'
import {Link} from 'gatsby'
import {motion, useMotionValue} from 'framer-motion'
import {
  circleVariants, containerVariants, iconVariants,
  itemVariants,
  starVariants,
  transition,
} from './variants'
import {AppStateContext} from '../../../../../contexts/AppStateContext'

const MenuItemsContainer = styled( motion.ul )`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  list-style-type: none;
  //margin-top: -80px;
  padding: 0;
  width: 85%;
  height: 59%;
  //border: thin solid crimson;

  ${largeUp(css`
    margin-top: 0;
    height: 80%;
  `)};

  ${mediumDown(css`
    margin-left: -8%;
    width: 50%;
  `)};
  
  a{
    position: relative;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }
`

const hoverMixin = css`
  [data-circle='1'] {
    transform: scale(1.62);
    transition: 1s cubic-bezier(0.6, 0.01, 0, 0.9);
  }

  [data-circle='2'],
  [data-circle='3'] {
    transform: scale(2.6);
    transition: 1s cubic-bezier(0.6, 0.01, 0, 0.9);
  }

  [data-circle='4'] {
    transform: scale(2);
    transition: 1s cubic-bezier(0.6, 0.01, 0, 0.9);
  }

  .stars {
    opacity: 1;
    //z-index: 1;
    transform: translate(-50%, -50%) rotate(-20deg) scale(.8);
    transition-delay: 0.2s;
    transition: 1s cubic-bezier(0.6, 0.01, 0, 0.9);
  }

  .icon {
    opacity: 1;
    //z-index: 1;
    transition-delay: 0.2s;
    transform: translate(-50%, -50%) scale(0.8);
    transition: 1s cubic-bezier(0.6, 0.01, 0, 0.9);


    //@media screen and (max-width: $md) {
    //  display: none;
    //}
  }
`

const Item = styled( motion.li )`
  position: relative;
  //border: thin solid red;

  &:nth-child(even) {
    align-self: flex-end;
    margin-right: 10%;
  }

  ${largeUp(css`
    
    &:nth-child(1) {
      margin-left: 20%;
    }

    &:nth-child(3) {
      //margin-top: 50px;
      align-self: center;
    }

    &:nth-child(4) {
      margin-right: 76%;
    }
  `)};
  
  ${ ({active}) => active && css`
    ${hoverMixin}
  `};
  
  &:hover{
   ${hoverMixin}; 
  }
  
 
`

const Title = styled.div`
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
  font-weight: bold;
  letter-spacing: 0.357em;
  text-transform: uppercase;
  color: #fafafa;
  text-shadow: 0.1em 0.1em 0.3em #000;
  pointer-events: none;
  
  ${text(.8)};
`

const Circle = styled( motion.div )`
  --size: 60px;
  
  position: relative;
  transition: 1s cubic-bezier(0.6, 0.01, 0, 0.9);
  border-radius: 50%;
  width: var(--size);
  height: var(--size);
  background-color: #1e213d;
  //transition: transform 0.5s;

  a{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 20;
  }

  ${mediumUp( css`
  
    &[data-circle='1'] {
      --size: 10.24rem;

      width: var(--size);
      height: var(--size);
    }

    &[data-circle='2']{
      --size: 5.858rem;

      width: var(--size);
      height: var(--size);
    }
    
    &[data-circle='3'] {
      --size: 5.258rem;

      width: var(--size);
      height: var(--size);
    }

    &[data-circle='4'] {
      --size: 7.75rem;

      width: var(--size);
      height: var(--size);
    }
    
  ` )};
`

const Star = styled( motion.div )`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 19.86rem;
  height: 19.86rem;
  background-image: url('${({ bgImg }) => bgImg}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  transform-origin: center;
  transform: translate(-50%, -50%) rotate(0deg);
  //transition: opacity 0.3s, transform 0.4s;
  opacity: 0;
  pointer-events: none;
  transition: all 1s cubic-bezier(0.6, 0.01, 0, 0.9);

`

const Icon = styled( motion.div )`
  position: absolute;
  top: 50%;
  left: 50%;
  background-image: url('${({ bgImg }) => bgImg}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  //transition: opacity 0.5s;
  transform: translate(-50%, -50%);
  opacity: 0;
  pointer-events: none;
  transition: all 1s cubic-bezier(0.6, 0.01, 0, 0.9);


  &[data-icon='1'] {
    width: 11.33rem;
    height: 11.33rem;
  }

  &[data-icon='2'],
  &[data-icon='3'] {
    width: 13.17rem;
    height: 11.83rem;
  }

  &[data-icon='4'] {
    width: 9.75rem;
    height: 12.08rem;
  }
`

const MenuItems = ({onClick}) => {
  const {
    blogIcon,
    blogStars,
    contactsIcon,
    contactsStars,
    portfolioIcon,
    portfolioStars,
    servicesIcon,
    servicesStars,
  } = useMenuAssets()

  const items = [
    {
      title: 'Projects',
      link: '/projects/',
      icon: portfolioIcon,
      stars: portfolioStars,
    },
    {
      title: 'About',
      link: '/',
      icon: servicesIcon,
      stars: servicesStars,
    },
    {
      title: 'Blog',
      link: '/blog',
      icon: blogIcon,
      stars: blogStars,
    },
    {
      title: 'Contacts',
      link: '/',
      icon: contactsIcon,
      stars: contactsStars,
    },
  ]

  const active = useMotionValue(null);
  const {
    isContactOpen,
    setContactModal,
    currentPath
  } = useContext(AppStateContext)

  return (
    <MenuItemsContainer variants={containerVariants}
                        initial='initial'
                        animate='animate'
                        exit='exit'
                        // whileHover='hover'


    >
      {items.map(({ icon, link, stars, title }, index) => (

          <Item variants={itemVariants}
                transition={transition}
                active={link === currentPath && currentPath !== '/'}
                key={link + index + title}
                onClick={() => {
                  if ( link === currentPath )
                    return;

                  onClick();
                  if ( title === 'About' || title === 'Contacts')
                    setTimeout(() => setContactModal(!isContactOpen), 600)
                }}
          >


            <Title>{title}</Title>

            <Circle data-circle={index + 1}>
              <Link to={link}/>

            </Circle>

            <Star bgImg={stars.publicURL}
                  className='stars' />

            <Icon bgImg={icon.publicURL}
                  data-icon={index + 1}
                  className='icon' />
          </Item>

      ))}
    </MenuItemsContainer>
  )
}

export default MenuItems
