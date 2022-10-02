import { useStaticQuery, graphql } from "gatsby";

const useBackgroundsAssets = () => {
  const data = useStaticQuery(graphql`
    query {
      starsBig: file(relativePath: { eq: "backgrounds/stars-big.svg" }) {
        publicURL
      }
      starsSmall: file(relativePath: { eq: "backgrounds/stars-small.svg" }) {
        publicURL
      }

      starsBigOld: file(relativePath: { eq: "backgrounds/stars-bigold.svg" }) {
        publicURL
      }

      starsSmallOld: file(
        relativePath: { eq: "backgrounds/stars-smallold.svg" }
      ) {
        publicURL
      }
    }
  `);

  return data;
};

export default useBackgroundsAssets;
