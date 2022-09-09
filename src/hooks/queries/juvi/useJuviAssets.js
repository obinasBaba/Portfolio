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

          }
          flame: file(relativePath: { eq: "juvi-haus/$flame-pea.png" }) {
              publicURL

          }
          pearl: file(relativePath: { eq: "juvi-haus/$pearl-bush.png" }) {
              publicURL

          }
          spartan: file(relativePath: { eq: "juvi-haus/$spartan.png" }) {
              publicURL

          }
          white: file(relativePath: { eq: "juvi-haus/$tiger-eye.png" }) {
              publicURL

          }

          fontAby: file(relativePath: { eq: "juvi-haus/font-quicksand.png" }) {
              publicURL

          }

          fontRai: file(relativePath: { eq: "juvi-haus/font-Ultra.png" }) {
              publicURL
          }

          elements: file(relativePath: { eq: "juvi-haus/others/element-2.png" }) {
              publicURL
              publicURL
              name
              ...homeWorksBigImage
          }


      }




  `);
};

export default useColorAssets;
