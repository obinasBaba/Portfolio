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

          element1: file(relativePath: { eq: "juvi-haus/others/element-1.png" }) {
              publicURL
              publicURL
              name
              ...homeWorksBigImage
          }

          element2: file(relativePath: { eq: "juvi-haus/others/element-2.png" }) {
              publicURL
              publicURL
              name
              ...homeWorksBigImage
          }

          element3: file(relativePath: { eq: "juvi-haus/others/element-3.png" }) {
              publicURL
              publicURL
              name
              ...homeWorksBigImage
          }

          element4: file(relativePath: { eq: "juvi-haus/others/element-4.png" }) {
              publicURL
              publicURL
              name
              ...homeWorksBigImage
          }
          
          element5: file(relativePath: { eq: "juvi-haus/others/element-5.png" }) {
              publicURL
              publicURL
              name
              ...homeWorksBigImage
          }


      }




  `);
};

export default useColorAssets;
