import { graphql, useStaticQuery } from "gatsby";

export default function useHeaderAssets() {
  return useStaticQuery(graphql`
    query Logo {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `);
}
