import React from 'react'
import styled, { css } from 'styled-components'
import {
  gridColWidth,
  gridify, largeUp,
  mediumDown, mediumUp,
  smallDown, smallUp,
  spacing,
} from '../../../styles/mixins'
import Info from './components/Info'
import Previews from './components/Previews'
import Headline from '../../../components/Headline'

const BlogPostContainer = styled.section`
  ${spacing('mt', 5)};
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
      ${gridColWidth(5, 25)};
    ` )};
  }

  & main {
    ${gridColWidth(5, 59)};


    ${mediumUp(css`
      ${gridColWidth(36, 63)};

    `)}

    ${smallUp(css`
      // ${gridColWidth(40, 63)};
    `)}

    ${largeUp(css`
      ${gridColWidth(35, 59)};
    ` )};
  }
`


const BlogPosts = () => {
  return (
    <BlogPostContainer>
      <Headline
        className="blog-headline"
        title='My Blogs'
        subtitle='Tips & Tricks'
        mb={10}
      />

      <PostsContainer>
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
