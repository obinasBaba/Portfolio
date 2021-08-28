import {graphql, useStaticQuery} from 'gatsby'

export const useApproachAssets = (index) => {
  return useStaticQuery(graphql`
    query {
      build: file(relativePath: {eq: "build.json"}) {
        publicURL
      }
      
      design: file(relativePath: { eq: "design.json" }) {
        publicURL
      }
      
      pentool: file(relativePath: { eq: "pentool.json" }) {
        publicURL
      }
      
      prototype: file(relativePath: { eq: "prototype.json" }) {
        publicURL
      }
      
      phone: file(relativePath: { eq: "phone.json" }) {
        publicURL
      }
      
      rocket: file(relativePath: { eq: "rocket.json" }) {
        publicURL
      }
      
      align: file(relativePath: { eq: "align.json" }) {
        publicURL
      }
      
      ufo: file(relativePath: { eq: "ufo.json" }) {
        publicURL
      }
    }
  `)
}