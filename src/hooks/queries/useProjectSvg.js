import { graphql, useStaticQuery } from 'gatsby'

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
            }

        }
    ` );
}
