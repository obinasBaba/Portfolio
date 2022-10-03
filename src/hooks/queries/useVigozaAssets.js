import { graphql, useStaticQuery } from "gatsby";

/*export const showcaseFrag = graphql`
  fragment showcaseFrag on File {
    childImageSharp {
      gatsbyImageData(
        quality: 100
        placeholder: BLURRED
        webpOptions: { quality: 100 }
      )
    }
  }
`*/

const useJuviAssets = () => {
  return useStaticQuery(graphql`
    query {
      
      webView: file(relativePath: { eq: "vigoza/webview.png" }) {
        publicURL
      }

      mobileView: file(relativePath: { eq: "vigoza/mobileview.png" }) {
        publicURL
      }

      showcase: file(relativePath: { eq: "vigoza/Showcase.png" }) {
        publicURL
      }
    }
  `);
};

export default useJuviAssets;
