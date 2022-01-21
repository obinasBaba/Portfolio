import React from 'react'
import styled, { css } from 'styled-components'
import {
  gridColWidth,
  gridify, largeUp,
  mediumDown, mediumUp,
  smallDown, smallUp,
  spacing, xLargeUp, xxLargeUp
} from "../../../styles/mixins";
import Info from './components/Info'
import Previews from './components/Previews'
import HeadlineTitle from '../../../components/Headline'

const BlogPostContainer = styled.section`
  ${spacing('mt', 15)};
`

const PostsContainer = styled.section`
  max-width: 100%;
  //overflow: hidden;

  ${spacing('mb', 25)};
  ${spacing('grid-row-gap', 20)};
  ${gridify()};

  & aside {
    ${gridColWidth(5, 61)};


    ${mediumUp(css`
      ${gridColWidth(3, 32)};
    `)}

    ${smallUp(css`
      // ${gridColWidth(3, 35)};
    `)}
    
    ${largeUp(css`
      ${gridColWidth(7, 28)};
    ` )};
    
    
    ${xxLargeUp(css`
      ${gridColWidth(3, 25)};
    ` )};
  }

  & main {
    //border: thin solid red;
    
    ${gridColWidth(5, 59)};


    ${mediumUp(css`
      ${gridColWidth(36, 63)};

    `)}

    ${smallUp(css`
      // ${gridColWidth(40, 63)};
    `)}

    ${largeUp(css`
      ${gridColWidth(36, 57)};
    ` )};
  }
`


const BlogPosts = () => {
  return (
    <BlogPostContainer data-scroll data-scroll-class='blog'>
      <HeadlineTitle
        className="blog-headline"
        title='My Blogs'
        subtitle='Tips & Tricks'
        mb={10}
      />

      <PostsContainer >
        <aside>
          <Info />
        </aside>

        <main>
          <Previews />
        </main>
      </PostsContainer>
    </BlogPostContainer>
  )
}

export default BlogPosts
