import { graphql, useStaticQuery } from 'gatsby'

const useProject3Assets = () => {

    return useStaticQuery(graphql`
    query {
      headlineImage: file(relativePath: { eq: "sections/projects/food.png" }) {
        publicURL
      }
    }
  `)
}

export default useProject3Assets;
