import { graphql, useStaticQuery } from "gatsby";

export default function useHeroAssets() {
  return useStaticQuery(graphql`
    query Hero {
      heroPic: file(relativePath: { eq: "heroPic.jpg" }) {
        publicURL
      }
    }
  `);
}
