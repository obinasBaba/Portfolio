import React, { useContext, useEffect } from 'react'
import { graphql } from 'gatsby'
import HeadLine from './components/Headline'
import Article from './components/Article'
import MoreBlog from './components/MoreBlog'
import { AppStateContext } from '../../contexts/AppStateContext'
import styled from 'styled-components'

const BlogContainer = styled.div`
  max-width: 1600px;
  width: 100%;
  overflow: hidden;
  //font-family: var(--sofia-pro);

`

const BlogTemplate = ({ data, path }) => {

  const { title, date, tags, thumbnail } = data.markdownRemark.frontmatter

  const { setMoonLight, setHeaderGradient, moonLight } = useContext(AppStateContext)

  useEffect(() => {
    setMoonLight({...moonLight, show: false})

    setHeaderGradient(false)
  }, [])



  return (
    < BlogContainer >
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

export default BlogTemplate;
