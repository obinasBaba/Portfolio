import React from 'react';
import BlogCard from './components/BlogCard';
import { graphql } from 'gatsby';
import { useMediaQuery, useTheme } from '@material-ui/core';
import BlogList from './components/BlogListContainer';
import useToolTip from '@hooks/useToolTip';
import Seo from '@components/seo';
import useUpdatePath from '@hooks/useUpdatePath';
import { container } from './bloglist.module.scss';
import clsx from 'clsx';

const BlogListTemplate = ({
  data,
  pageContext: { currentPage, pageCount },
  path,
}) => {

  useUpdatePath(path);

  useToolTip('[data-tooltip-text]');

  // const previousPage = currentPage === 2 ? "/blog" : `/blog/${currentPage - 1}`;
  // const nextPage = `/blog/${currentPage + 1}`;
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div>
      <Seo
        title='Blog'
        description='this is a blog list page where i share my experience as developer'
      />

      <div className={clsx([container])} id='blog-container'>

        {/*  <div className={stickyWrapper}
             data-scroll={true}
             data-scroll-sticky={true}
             data-scroll-target='#blog-container'>
          <Moon pos='fixed' moonStyle={moonStyle} />
          <BackgroundArt />
        </div>*/}

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
                    date,
                  },
                },
              },
              index,
            ) => (
              <BlogCard
                title={title}
                date={date}
                key={excerpt}
                featuredMedia={{ publicURL, childImageSharp }}
                body={`${excerpt.slice(0, match ? 250 : 190)} ...`}
                slug={link}
                index={index}
              />
            ),
          )}

        </BlogList>
      </div>
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

