import React, { useContext, useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import HeadLine from './components/Headline'
import Article from './components/Article'
import MoreBlog from './components/MoreBlog'
import { AppStateContext } from '../../contexts/AppStateContext'
import styled from 'styled-components'
import ReturnBtn from '../../components/ReturnBtn'
import BackArrow from './components/Article/BackArrow'

const BlogContainer = styled.div`
  position: relative;
  max-width: 1600px;
  width: 100%;
  overflow: hidden;
  z-index: 0;
  //font-family: var(--sofia-pro);
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

const BlogPage = ({ data, path, ...other }) => {
  const { title, date, tags, thumbnail } = data.markdownRemark.frontmatter

  // console.log(other)

  return (
    <BlogContainer>
      <GradientBg />

      <HeadLine
        title={title}
        date={date}
        tags={tags ? tags : []}
        thumbnail={thumbnail}
      />

      <Article html={data.markdownRemark.html} />

      <MoreBlog />

    </BlogContainer>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
  }
`

export default BlogPage
