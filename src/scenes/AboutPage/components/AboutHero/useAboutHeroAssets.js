import { graphql, useStaticQuery } from "gatsby";

const useAboutHeroAssets = () =>
  useStaticQuery(graphql`
    query {
      photo: file(relativePath: { eq: "photo.png" }) {
        publicURL
      }
    }
  `);

export default useAboutHeroAssets;
