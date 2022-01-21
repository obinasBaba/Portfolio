import React, {useContext, useLayoutEffect} from 'react'
import { graphql } from 'gatsby'
import HeadLine from './components/Headline'
import Article from './components/Article'
import MoreBlog from './components/MoreBlog'
import styled from 'styled-components'
import useLocoScroll from '../../hooks/useLocoScroll'
import {AppStateContext, BackgroundOverlayStateContext} from '../../contexts/AppStateContext'
import {motion} from 'framer-motion'
import {basicVariants, transition} from '../../helpers/variants'
import useToolTip from "../../hooks/useToolTip";
import useRefreshMouseListeners from "../../hooks/useRefreshMouseListeners";
import {MotionStateWrapper} from "../../contexts/MotionStateWrapper";



const BlogContainer = styled( motion.div )`
  position: relative;
  //max-width: 1600px;
  width: 100%;
  overflow: hidden;
  z-index: 0;
`

const GradientBg = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: linear-gradient(
    137.81deg,
    #e7a28f -13.52%,
    #f9d6ac 41.89%,
    #fbfefc 96.77%
  );
`

export const containerVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1
  },
  exit: {
    opacity: 0,
  }
}

const BlogPage = ({data, path, ...other}) => {
  const { title, date, tags, thumbnail } = data.currentBlog.frontmatter;

  const { setCurrentPath } = useContext(AppStateContext)

  const { backgroundOverlay } = useContext(BackgroundOverlayStateContext)

  useLocoScroll(!backgroundOverlay)


  useLayoutEffect( () => {
    setCurrentPath(path)
    setTimeout(() => {
      window.locoInstance && window.locoInstance.update()
    }, 5000)
  }, [] )

  useToolTip('[data-tooltip-text]')
  useRefreshMouseListeners('[data-pointer]')


  return (
      <>

      {
        !backgroundOverlay && <BlogContainer id='blog-container'
                                             variants={containerVariant}
                                             transition={transition}
                                             initial='initial'
                                             animate='animate'
                                             exit='exit'
        >

          <div >
            <HeadLine
                title={title}
                date={date}
                tags={tags ? tags : []}
                thumbnail={thumbnail}
            />
          </div>

          <Article html={data.currentBlog.html} />

          <MoreBlog data={data.nextBlog.frontmatter} slug={data.nextBlog.fields.slug}/>

          {/*<GradientBg />*/}

        </BlogContainer>
      }
      </>
  )
}

export const query = graphql`
  query($slug: String!, $nextBlog: String!) {
    currentBlog: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        contentKey
        date(formatString: "MMMM D, YYYY")
        title
        tags {
          tag
        }
        thumbnail {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, quality: 100)
          }
        }
      }
      html
    }
    
    nextBlog: markdownRemark(fields: { slug: { eq: $nextBlog } }) {
      frontmatter {
        contentKey
        date(formatString: "MMMM D, YYYY")
        title
        tags {
          tag
        }
        thumbnail {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, quality: 100)
          }
        }
      }
      fields {
        slug
      }
    }
    
  }
`

export default BlogPage
