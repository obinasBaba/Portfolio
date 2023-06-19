import { graphql, useStaticQuery } from "gatsby";

const useAboutHeroAssets = () =>
  useStaticQuery(graphql`
    query {
      photo: file(relativePath: { eq: "img.png" }) {
        publicURL
      }
    }
  `);

export default useAboutHeroAssets;
