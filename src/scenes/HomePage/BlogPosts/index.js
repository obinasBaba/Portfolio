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

const PostsContainer = styled.section`
  ${spacing('mt', 20)};
  ${spacing('mb', 15)};
  ${gridify()};

  & aside {
    ${gridColWidth(7, 23)};

    ${mediumDown(css`
      ${gridColWidth(4, 22)};
    `)}

    ${smallDown(css`
      ${gridColWidth(5, 61)};
    `)}
  }
  
  & main{
    ${gridColWidth(28, 59)};

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
    <PostsContainer>
      <aside>
        <Info />
      </aside>

      <main>
        <Previews/>
      </main>
    </PostsContainer>
  )
}

export default BlogPosts
