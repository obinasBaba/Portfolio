import { graphql, useStaticQuery } from 'gatsby'

export const homeWorksBigImage = graphql`
  fragment homeWorksBigImage on File {
    childImageSharp {
      gatsbyImageData(
        quality: 100
        placeholder: BLURRED
        webpOptions: { quality: 100 }
      )
    }
  }
`

export const homeWorksMiddleImage = graphql`
  fragment homeWorksMiddleImage on File {
    childImageSharp {
      gatsbyImageData(
        quality: 100
        placeholder: BLURRED
        webpOptions: { quality: 100 }
      )
    }
  }
`

export const homeWorksSmallImage = graphql`
  fragment homeWorksSmallImage on File {
    childImageSharp {
      gatsbyImageData(
        quality: 100
        placeholder: BLURRED
        webpOptions: { quality: 100 }
      )
    }
  }
`

const useHomeWorksAssets = () => {
  return useStaticQuery(graphql`
    query {
      Art: file(
        relativePath: { eq: "sections/home-works/Art-Investments-Platform.jpg" }
      ) {
        name
        ...homeWorksMiddleImage
      }
      eScooter: file(
        relativePath: { eq: "sections/home-works/eScooter-2.jpg" }
      ) {
        name
        ...homeWorksBigImage
      }
      Web: file(relativePath: { eq: "sections/home-works/web-3.jpg" }) {
        name
        ...homeWorksBigImage
      }
      Hommy: file(
        relativePath: { eq: "sections/home-works/Hommy-dashboard.jpg" }
      ) {
        name
        ...homeWorksSmallImage
      }
      Investments: file(
        relativePath: {
          eq: "sections/home-works/Realty-Web-Dasboard.jpg"
        }
      ) {
        name
        ...homeWorksMiddleImage
      }
      Lazy: file(
        relativePath: { eq: "sections/home-works/Lazy-Daisy-Mobile.jpg" }
      ) {
        name
        ...homeWorksSmallImage
      }
      Starbank: file(relativePath: { eq: "sections/home-works/starbank-2.jpg" }) {
        name
        ...homeWorksSmallImage
      }
      Teampoint: file(
        relativePath: { eq: "sections/home-works/Teampoint.jpg" }
      ) {
        name
        ...homeWorksSmallImage
      }
      Travel: file(
        relativePath: { eq: "sections/home-works/travel-2.jpg" }
      ) {
        name
        ...homeWorksSmallImage
      }
      Tude: file(relativePath: { eq: "sections/home-works/Tude-Website.jpg" }) {
        name
        ...homeWorksSmallImage
      }
      Realty: file(
        relativePath: { eq: "sections/home-works/Realty-Web-Dasboard.jpg" }
      ) {
        name
        ...homeWorksMiddleImage
      }
      North: file(
        relativePath: { eq: "sections/home-works/North-Face-Shop.jpg" }
      ) {
        name
        ...homeWorksBigImage
      }
    }
  `)
}

export default useHomeWorksAssets
