import { graphql, useStaticQuery } from 'gatsby';

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

const useAssets = () => {
  return useStaticQuery(graphql`
      query {

          headlineImage: file(
              relativePath: { eq: "sections/projects/lssya.png" }
          ) {
              publicURL
          }
         

          rectView: file(
              relativePath: { eq: "sections/projects/lssya-rect.png" }
          ) {
              publicURL
              name
              ...homeWorksBigImage
          }
          
          resume: file(
              relativePath: { eq: "sections/projects/resume.pdf" }
          ) {
              publicURL
              name
              ...homeWorksBigImage
          }
      }
  `);
};

export default useAssets;
