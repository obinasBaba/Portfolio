import { graphql, useStaticQuery } from "gatsby";

const useProject2Assets = () => {
  return useStaticQuery(graphql`
    query {
      headlineImage: file(
        relativePath: { eq: "sections/projects/auction.jpeg" }
      ) {
        publicURL
      }
    }
  `);
};

export default useProject2Assets;
