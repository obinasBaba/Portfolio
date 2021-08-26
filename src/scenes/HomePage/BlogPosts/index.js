import React from 'react'
import styled, { css } from 'styled-components'
import {
  gridColWidth,
  gridify,
  mediumDown,
  smallDown,
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

  ${spacing('mb', 15)};
  ${gridify()};

  & aside {
    ${gridColWidth(5, 25)};

    ${mediumDown(css`
      ${gridColWidth(4, 22)};
    `)}

    ${smallDown(css`
      ${gridColWidth(5, 61)};
    `)}
  }

  & main {
    ${gridColWidth(35, 59)};

    ${mediumDown(css`
      ${gridColWidth(28, 61)};
    `)}

    ${smallDown(css`
      ${gridColWidth(5, 59)};
    `)}
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
