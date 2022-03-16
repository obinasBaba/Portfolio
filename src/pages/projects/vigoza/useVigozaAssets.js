import { graphql, useStaticQuery } from 'gatsby'

const useVigozaAssets = () => {

  return useStaticQuery(graphql`
    query {
      headlineImage: file(relativePath: { eq: "sections/projects/preview-11.jpg" }) {
        publicURL
      }
      
      starsSmall: file(relativePath: { eq: "backgrounds/stars-small.svg" }) {
        publicURL
      }

      starsBigOld: file(relativePath: { eq: "backgrounds/stars-bigold.svg" }) {
        publicURL
      }

      starsSmallOld: file(
        relativePath: { eq: "backgrounds/stars-smallold.svg" }
      ) {
        publicURL
      }
    }
  `)
}

export default useVigozaAssets;
