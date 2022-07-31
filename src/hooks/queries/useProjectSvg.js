import { graphql, useStaticQuery } from "gatsby";

export const homeWorksMiddleImage = graphql`
    fragment homeWorksMiddleImage on File {
        childImageSharp {
            gatsbyImageData(
                quality: 100
                placeholder: BLURRED
                webpOptions: { quality: 100 }
            )
        }
    }
`;

export function useProjectSvg(){
  return useStaticQuery( graphql`
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

          rightArrow: file(
              relativePath: { eq: "sections/otherUtil/right-arrow.svg" }
          ) {
              publicURL
          }

          planet: file(
              relativePath: { eq: "sections/otherUtil/planet.svg" }
          ){

              publicURL
              name
              ...homeWorksMiddleImage
          }

      }
  ` );
}
