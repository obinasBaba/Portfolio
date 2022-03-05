import { graphql, useStaticQuery } from 'gatsby'

const useAboutHeroAssets = () => {

    return useStaticQuery(graphql`
    query {
      photo: file(relativePath: { eq: "photo.png" }) {
        publicURL
      }
    }
  `)
}

export default useAboutHeroAssets;
