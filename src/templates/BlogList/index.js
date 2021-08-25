import React, { useContext, useEffect } from 'react'
import BlogCard from './components/BlogCard'
import { graphql } from 'gatsby'
import styled, { useTheme } from 'styled-components'
import { useMediaQuery } from '@material-ui/core'
import BlogList from './components/BlogListContainer'
import { AppStateContext } from '../../contexts/AppStateContext'
import MailUs from '../../scenes/MailUs'
import useLocoScroll from '../../hooks/useLocoScroll'
import Moon from '../../layouts/Components/Moon'
import PenEffect from './components/BlogListContainer/PenEffect'


const BlogListTemplate = ({
  data,
  pageContext: { currentPage, pageCount },
  path,
}) => {
  const { setCurrentPath, moScroll } = useContext(AppStateContext)

  useEffect(() => {
    setCurrentPath(path)
  }, [])

  useLocoScroll(true)


  const previousPage = currentPage === 2 ? '/blog' : `/blog/${currentPage - 1}`
  const nextPage = `/blog/${currentPage + 1}`
  const theme = useTheme()
  const match = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <>
      <Moon showMoon={false} pos='fixed' />
      <PenEffect  />
      <BlogList>
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
                featuredMedia={{ publicURL, childImageSharp }}
                body={`${excerpt.substr(0, 290)} ...`}
                slug={slug}
                index={index}
              />
            )
          }
        )}

        {/*<PageLinks>
        {currentPage > 1 && <ReadButton txt="Prev" to={previousPage} />}

        {currentPage < pageCount && <ReadButton txt="Next" to={nextPage} />}
      </PageLinks>*/}
      </BlogList>

    </>
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

