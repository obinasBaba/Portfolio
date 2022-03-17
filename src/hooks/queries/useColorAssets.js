import { graphql, useStaticQuery } from 'gatsby'


const useColorAssets = () => {
  return useStaticQuery(graphql`
    query {
      amber: file(relativePath: { eq: "vigoza/$amber.png" }) {
        publicURL
        
      }
      flame: file(relativePath: { eq: "vigoza/$flame-pea.png" }) {
        publicURL
        
      }
      pearl: file(relativePath: { eq: "vigoza/$pearl-bush.png" }) {
        publicURL
        
      }
      spartan: file(relativePath: { eq: "vigoza/$spartan.png" }) {
        publicURL
        
      }
      white: file(relativePath: { eq: "vigoza/$white.png" }) {
        publicURL
        
      }
      
      fontAby: file(relativePath: { eq: "vigoza/font-abyssopelagic.png" }) {
        publicURL
        
      }
      
      fontRai: file(relativePath: { eq: "vigoza/font-raisonne.png" }) {
        publicURL
        
      }
      
      
    }
    
    
    
    
  `)
}

export default useColorAssets
