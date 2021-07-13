import { graphql, useStaticQuery } from 'gatsby'

/*export const ExperimentsPreview = graphql`
  fragment ExperimentsPreview on File {
    childImageSharp {
      gatsbyImageData(
        quality: 100
        formats: [AUTO, WEBP, AVIF]
        placeholder: BLURRED
      )
    }
  }
`*/

export const useExperimentAssets = () => {
  return useStaticQuery(graphql`
    query {
      exp1: file(relativePath: { eq: "sections/experiments/exp1.gif" }) {
        publicURL
        name
      }
      exp2: file(relativePath: { eq: "sections/experiments/exp2.gif" }) {
        publicURL
        name
      }
      exp3: file(relativePath: { eq: "sections/experiments/exp3.gif" }) {
        publicURL
        name
      }
      exp4: file(relativePath: { eq: "sections/experiments/exp4.gif" }) {
        publicURL
        name
      }
      
      
    }
  `)
}