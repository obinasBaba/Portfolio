import { graphql, useStaticQuery } from "gatsby";

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
`;

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
`;

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
`;

const useHomeWorksAssets = () => {
  return useStaticQuery(graphql`
      query {
          JD_1: file(
              relativePath: { eq: "sections/home-works/juvi-desk-1.png" }
          ) {
              name
              ...homeWorksMiddleImage
          }
          JM_1: file(
              relativePath: { eq: "sections/home-works/juvi-mobile-1.png" }
          ) {
              name
              ...homeWorksMiddleImage
          }
          Blog: file(
              relativePath: { eq: "sections/home-works/blog.png" }
          ) {
              name
              ...homeWorksBigImage
          }
          Resume: file(relativePath: { eq: "sections/home-works/resume.png" }) {
              name
              ...homeWorksBigImage
          }
          Fasraf: file(
              relativePath: { eq: "sections/home-works/fasraf.png" }
          ) {
              name
              ...homeWorksSmallImage
          }
          Investments: file(
              relativePath: { eq: "sections/home-works/Realty-Web-Dasboard.jpg" }
          ) {
              name
              ...homeWorksMiddleImage
          }
          JM_2: file(
              relativePath: { eq: "sections/home-works/juvi-mobile-2.png" }
          ) {
              name
              ...homeWorksSmallImage
          }
          Rahove_team: file(
              relativePath: { eq: "sections/home-works/rahove-team.png" }
          ) {
              name
              ...homeWorksSmallImage
          }
           
          Travel: file(relativePath: { eq: "sections/home-works/travel-2.jpg" }) {
              name
              ...homeWorksSmallImage
          }
          Divo: file(relativePath: { eq: "sections/home-works/divo.png" }) {
              name
              ...homeWorksSmallImage
          }
          Realty: file(
              relativePath: { eq: "sections/home-works/Realty-Web-Dasboard.jpg" }
          ) {
              name
              ...homeWorksMiddleImage
          }
          Hero: file(
              relativePath: { eq: "sections/home-works/Hero.png" }
          ) {
              name
              ...homeWorksBigImage
          }

          p1: file(relativePath: { eq: "sections/home-gallery/2.jpg" }) {
              name
              ...homeWorksBigImage
          }

          p2: file(relativePath: { eq: "sections/home-gallery/4.jpg" }) {
              name
              ...homeWorksBigImage
          }

          p3: file(relativePath: { eq: "sections/home-gallery/6.jpg" }) {
              name
              ...homeWorksBigImage
          }
      }
  `);
};

export default useHomeWorksAssets;
