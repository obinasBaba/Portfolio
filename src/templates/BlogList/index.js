import React, { useContext, useEffect } from "react";
import BlogCard from "./components/BlogCard";
import { graphql } from "gatsby";
import styled, { css } from "styled-components";
import { useMediaQuery, useTheme } from "@material-ui/core";
import BlogList from "./components/BlogListContainer";
import { AppStateContext, BackgroundOverlayStateContext } from "../../contexts/AppStateContext";
import Moon from "../../components/MoonLight";
import PenEffect from "./components/PenEffect";
<<<<<<< Updated upstream
import { gridify } from "../../styles/mixins";
import useToolTip from "../../hooks/useToolTip";
import Seo from "../../components/seo";
=======
import useToolTip from "@/hooks/useToolTip";
import Seo from "@/components/seo";
>>>>>>> Stashed changes

const moonStyle = css``;

const Container = styled.div`
  position: relative;
  width: 100%;


`;

const BlogListTemplate = ( {
                             data,
                             pageContext: { currentPage, pageCount },
                             path
                           } ) => {
  const { setCurrentPath } = useContext( AppStateContext );
  const { backgroundOverlay } = useContext( BackgroundOverlayStateContext );

  useEffect( () => {
    setCurrentPath( path );

  }, [] );

  useToolTip( "[data-tooltip-text]" );
  // useRefreshMouseListeners( "[data-pointer]" );
  // useLocoScroll( !backgroundOverlay );


  // const previousPage = currentPage === 2 ? "/blog" : `/blog/${currentPage - 1}`;
  // const nextPage = `/blog/${currentPage + 1}`;
  const theme = useTheme();
  const match = useMediaQuery( theme.breakpoints.up( "sm" ) );

  return (
    <div>
      <Seo
        title="Blog"
        description="this is a blog list page where i share my experience as developer"
      />

      <Container className="blog-container-temp">
        <Moon showMoon={false} pos="fixed" moonStyle={moonStyle} />
        <PenEffect />
        <BlogList>
          {data.allMarkdownRemark.edges.map(
            (
              {
                node: {
                  excerpt,
                  frontmatter: {
                    title,
                    link,
                    thumbnail: { publicURL, childImageSharp },
                    date
                  }
                }
              },
              index
            ) => {
              return (
                <BlogCard
                  title={title}
                  date={date}
                  key={excerpt}
                  featuredMedia={{ publicURL, childImageSharp }}
                  body={`${excerpt.slice( 0, match ? 250 : 190 )} ...`}
                  slug={link}
                  index={index}
                />
              );
            }
          )}

        </BlogList>
      </Container>
    </div>
  );
};


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
                        link
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
`;

export default BlogListTemplate;

