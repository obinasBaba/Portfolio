import { graphql, useStaticQuery } from "gatsby";

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
      exp1mp4: file(relativePath: { eq: "sections/experiments/exp1.mp4" }) {
        publicURL
        name
      }

      exp1webm: file(relativePath: { eq: "sections/experiments/exp1.webm" }) {
        publicURL
        name
      }

      exp2mp4: file(relativePath: { eq: "sections/experiments/exp2.mp4" }) {
        publicURL
        name
      }

      exp2webm: file(relativePath: { eq: "sections/experiments/exp2.webm" }) {
        publicURL
        name
      }

      exp3mp4: file(relativePath: { eq: "sections/experiments/exp3.mp4" }) {
        publicURL
        name
      }

      exp3webm: file(relativePath: { eq: "sections/experiments/exp3.webm" }) {
        publicURL
        name
      }

      exp4mp4: file(relativePath: { eq: "sections/experiments/exp4.mp4" }) {
        publicURL
        name
      }

      exp4webm: file(relativePath: { eq: "sections/experiments/exp4.webm" }) {
        publicURL
        name
      }
    }
  `);
};
