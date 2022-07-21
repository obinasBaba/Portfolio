import { graphql, useStaticQuery } from "gatsby";

export const useRecommendedBlogs = () => {
  return useStaticQuery( graphql`
      query boo{
          allPost: allMarkdownRemark(
              filter: { frontmatter: { contentKey: { eq: "blog" } } }
          ) {
              edges {
                  node {
                      id
                      fields {
                          slug
                      }
                      frontmatter {
                          date(formatString: "MMMM D, YYYY")
                          tags {
                              tag
                          }
                          link
                          title
                          thumbnail {
                              publicURL
                              childImageSharp {
                                  gatsbyImageData(
                                      aspectRatio: 1.5
                                      placeholder: BLURRED
                                      webpOptions: {quality: 100}
                                  )
                              }
                          }
                      }
                  }
              }
              totalCount
          }
      }
  ` );
};
