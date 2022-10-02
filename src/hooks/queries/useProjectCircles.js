import { graphql, useStaticQuery } from "gatsby";

export const useProjectCircles = () => {
  return useStaticQuery(graphql`
    query {
      circle1: file(relativePath: { eq: "circle.json" }) {
        publicURL
      }

      circle2: file(relativePath: { eq: "circle2.json" }) {
        publicURL
      }
    }
  `);
};
