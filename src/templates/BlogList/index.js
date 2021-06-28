import React, {useContext, useEffect} from 'react'
import BlogCard from './components/BlogCard'
import { graphql, Link } from 'gatsby'
import styled, { useTheme } from 'styled-components'
import { useMediaQuery } from '@material-ui/core'
import BlogListContainer from './components/BlogListContainer'
import {AppStateContext} from '../../contexts/AppStateContext'

const PageLinks = styled.div`
  padding: 1rem;

  a {
    margin: 1rem;
  }
`

const BlogListTemplate = ({
  data,
  pageContext: { currentPage, pageCount },
}) => {

  const {
    moonLight,
    setMoonLight
  } = useContext( AppStateContext )

  useEffect(() => {
    setMoonLight({...moonLight, showMoon: false, position: 'fixed', show: true})

  }, [])

  const previousPage = currentPage === 2 ? '/blog' : `/blog/${currentPage - 1}`

  const nextPage = `/blog/${currentPage + 1}`
  const theme = useTheme()
  const match = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <BlogListContainer>
      {data.allMarkdownRemark.edges.map(
        (
          {
            node: {
              id,
              excerpt,
              fields: { slug },
              frontmatter: {
                title,
                thumbnail: { publicURL, childImageSharp },
                date,
              },
            },
          },
          index
        ) => {
          return (
            <BlogCard
              title={title}
              date={date}
              key={excerpt}
              featuredMedia={{publicURL, childImageSharp}}
              body={`${excerpt.substr(0, 290)} ...`}
              slug={slug}
            />
          )
        }
      )}

      <PageLinks>
        {currentPage > 1 && <Link to={previousPage}>Prev Page</Link>}

        {currentPage < pageCount && <Link to={nextPage}>Next Page</Link>}
      </PageLinks>

    </BlogListContainer>
  )
}

// The Page query that accept parameter.
export const query = graphql`
  query BlogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { contentKey: { eq: "blog" } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt(pruneLength: 350, truncate: false)
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            thumbnail {
              publicURL
              childImageSharp {
                gatsbyImageData(
                  aspectRatio: 1.5
                  placeholder: BLURRED
                  webpOptions: { quality: 100 }
                )
              }
            }
          }
        }
      }
    }
  }
`

export default BlogListTemplate

