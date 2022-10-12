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

const useColorAssets = () => {
  return useStaticQuery(graphql`
      query {
          amber: file(relativePath: { eq: "juvi-haus/$amber.png" }) {
              publicURL
              ...homeWorksBigImage
          }

          flame: file(relativePath: { eq: "juvi-haus/$flame-pea.png" }) {
              publicURL
              ...homeWorksBigImage
          }

          pearl: file(relativePath: { eq: "juvi-haus/$pearl-bush.png" }) {
              publicURL
              ...homeWorksBigImage
          }

          spartan: file(relativePath: { eq: "juvi-haus/$spartan.png" }) {
              publicURL
              ...homeWorksBigImage
          }

          white: file(relativePath: { eq: "juvi-haus/$tiger-eye.png" }) {
              publicURL
              ...homeWorksBigImage
          }

          fontAby: file(relativePath: { eq: "juvi-haus/font-quicksand.png" }) {
              publicURL
              ...homeWorksBigImage
          }

          fontRai: file(relativePath: { eq: "juvi-haus/font-Ultra.png" }) {
              publicURL
              ...homeWorksBigImage
          }

          element1: file(relativePath: { eq: "juvi-haus/others/element-1.png" }) {
              publicURL
              name
              ...homeWorksBigImage
          }

          element2: file(relativePath: { eq: "juvi-haus/others/element-2.png" }) {
              publicURL
              name
              ...homeWorksBigImage
          }

          element3: file(relativePath: { eq: "juvi-haus/others/element-3.png" }) {
              publicURL
              name
              ...homeWorksBigImage
          }

          element4: file(relativePath: { eq: "juvi-haus/others/element-4.png" }) {
              publicURL
              name
              ...homeWorksBigImage
          }

          element5: file(relativePath: { eq: "juvi-haus/others/element-5.png" }) {
              publicURL
              name
              ...homeWorksBigImage
          }

          headlineImage: file(
              relativePath: { eq: "sections/projects/juvi.png" }
          ) {
              publicURL
          }
      }
  `);
};

export default useColorAssets;
