import React, {useContext, useEffect, useLayoutEffect} from 'react'
import BlogCard from './components/BlogCard'
import { graphql } from 'gatsby'
import styled, {css} from 'styled-components'
import {useMediaQuery, useTheme} from '@material-ui/core'
import BlogList from './components/BlogListContainer'
import {AppStateContext, BackgroundOverlayStateContext} from '../../contexts/AppStateContext'
import useLocoScroll from '../../hooks/useLocoScroll'
import Moon from '../../components/MoonLight'
import PenEffect from './components/BlogListContainer/PenEffect'
import {gridify} from "../../styles/mixins";
import useToolTip from "../../hooks/useToolTip";
import useRefreshMouseListeners from "../../hooks/useRefreshMouseListeners";

const moonStyle = css`
    
`

const Container = styled.div`
  position: relative;
  width: 100%;

  ${gridify()};
  
`

const BlogListTemplate = ({
  data,
  pageContext: { currentPage, pageCount },
  path,
}) => {
  const { setCurrentPath } = useContext(AppStateContext)
  const { backgroundOverlay } = useContext(BackgroundOverlayStateContext)

  useEffect(() => {
    setCurrentPath(path)
  }, [])

    useToolTip('[data-tooltip-text]')
    useRefreshMouseListeners('[data-pointer]')
  useLocoScroll(!backgroundOverlay)


  const previousPage = currentPage === 2 ? '/blog' : `/blog/${currentPage - 1}`
  const nextPage = `/blog/${currentPage + 1}`
  const theme = useTheme()
  const match = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <>
        {
            !backgroundOverlay && <Container>
                <Moon showMoon={false} pos="fixed" moonStyle={moonStyle} />
                <PenEffect />
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
                                    body={`${excerpt.substr(0, match ? 250 : 190)} ...`}
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
            </Container>
        }
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

