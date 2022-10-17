import { graphql, useStaticQuery } from 'gatsby';

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
          exp1mp4: file(relativePath: { eq: "sections/experiments/exp11.mp4" }) {
              publicURL
              name
          }

          exp1webm: file(relativePath: { eq: "sections/experiments/exp11.webm" }) {
              publicURL
              name
          }

          exp2mp4: file(relativePath: { eq: "sections/experiments/exp22.mp4" }) {
              publicURL
              name
          }

          exp2webm: file(relativePath: { eq: "sections/experiments/exp22.webm" }) {
              publicURL
              name
          }

          exp3mp4: file(relativePath: { eq: "sections/experiments/exp33.mp4" }) {
              publicURL
              name
          }

          exp3webm: file(relativePath: { eq: "sections/experiments/exp33.webm" }) {
              publicURL
              name
          }

          exp4mp4: file(relativePath: { eq: "sections/experiments/exp44.mp4" }) {
              publicURL
              name
          }

          exp4webm: file(relativePath: { eq: "sections/experiments/exp44.webm" }) {
              publicURL
              name
          }

          exp5mp4: file(relativePath: { eq: "sections/experiments/addtocart.mp4" }) {
              publicURL
              name
          }

          exp5webm: file(relativePath: { eq: "sections/experiments/addtocart.webm" }) {
              publicURL
              name
          }



      }
  `);
};
