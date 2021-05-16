import { graphql, useStaticQuery } from 'gatsby'

export function useRecentDesignAssets(){
  return useStaticQuery(graphql`
    query {
      
      dribbleRed: file(
        relativePath: { eq: "sections/portfolio-works/dribbble-red.svg" }
      ) {
        publicURL
      }
      
      circledText: file(
        relativePath: { eq: "sections/portfolio-works/circled-text.svg" }
      ) {
        publicURL
      }
      
    }
  `);
}