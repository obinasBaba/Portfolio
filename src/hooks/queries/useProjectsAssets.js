import { graphql, useStaticQuery } from 'gatsby'

export const projectsPreviewFragment = graphql`
  fragment projectsPreviewFragment on File {
    childImageSharp {
      gatsbyImageData(quality: 100, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED)
    }
  }
`

const useProjectsAssets = () => {
  return useStaticQuery(graphql`
    query {
      preview1: file(relativePath: { eq: "sections/projects/preview-11.jpg" }) {
        name
        ...projectsPreviewFragment
      }
      preview2: file(relativePath: { eq: "sections/projects/preview-22.png" }) {
        name
        ...projectsPreviewFragment
      }
      preview3: file(relativePath: { eq: "sections/projects/preview-3.png" }) {
        name
        ...projectsPreviewFragment
      }
      
  
      css3: file(relativePath: { eq: "sections/services-technologies/css3.svg" }) {
        publicURL
      }
      angular: file(relativePath: { eq: "sections/services-technologies/angular.svg" }) {
        publicURL
      }
      javascript: file(relativePath: { eq: "sections/services-technologies/javascript.svg" }) {
        publicURL
      }
      sql: file(relativePath: { eq: "sections/services-technologies/mysql.svg" }) {
        publicURL
      }
      pwa: file(relativePath: { eq: "sections/services-technologies/pwa.svg" }) {
        publicURL
      }
      react: file(relativePath: { eq: "sections/services-technologies/react-native.svg" }) {
        publicURL
      }
      typescript: file(relativePath: { eq: "sections/services-technologies/typescript.svg" }) {
        publicURL
      }
      mongo: file(relativePath: { eq: "sections/services-technologies/mongodb.svg" }) {
        publicURL
      }
      postgres: file(relativePath: { eq: "sections/services-technologies/postgresql.svg" }) {
        publicURL
      }
      vue: file(relativePath: { eq: "sections/services-technologies/vue.svg" }) {
        publicURL
      }
      node: file(relativePath: { eq: "sections/services-technologies/nodejs.svg" }) {
        publicURL
      }
      
      kklLuzern: file(relativePath: { eq: "brands/kkl-luzern.svg" }) {
        publicURL
      }
      udemy: file(relativePath: { eq: "brands/udemy.svg" }) {
        publicURL
      }
      auth: file(relativePath: { eq: "brands/auth0.svg" }) {
        publicURL
      }
    }
  `)
};

export default useProjectsAssets;
