import { graphql, useStaticQuery } from "gatsby";

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

const useMarqueeAssets = () => {
  return useStaticQuery(graphql`
    query {
      saying: file(relativePath: { eq: "juvi-haus/marquee/are-saying.png" }) {
        publicURL
        name
        ...homeWorksBigImage
      }
      cart: file(relativePath: { eq: "juvi-haus/marquee/cart.png" }) {
        publicURL
        name
        ...homeWorksBigImage
      }
      footer: file(relativePath: { eq: "juvi-haus/marquee/footer.png" }) {
        publicURL
        name
        ...homeWorksBigImage
      }
      hero_1: file(relativePath: { eq: "juvi-haus/marquee/hero-1.png" }) {
        publicURL
        name
        ...homeWorksBigImage
      }
      hero_2: file(relativePath: { eq: "juvi-haus/marquee/hero-2.png" }) {
        publicURL
        name
        ...homeWorksBigImage
      }

      list: file(relativePath: { eq: "juvi-haus/marquee/list.png" }) {
        publicURL
        name
        ...homeWorksBigImage
      }

      navBar: file(relativePath: { eq: "juvi-haus/marquee/nav-bar.png" }) {
        publicURL
        name
        ...homeWorksBigImage
      }

      productDetailPage: file(
        relativePath: { eq: "juvi-haus/marquee/product-detail-page.png" }
      ) {
        publicURL
        name
        ...homeWorksBigImage
      }

      productDetail: file(
        relativePath: { eq: "juvi-haus/marquee/product-detail.png" }
      ) {
        publicURL
        name
        ...homeWorksBigImage
      }

      rare: file(relativePath: { eq: "juvi-haus/marquee/rare.png" }) {
        publicURL
        name
        ...homeWorksBigImage
      }

      testimonial: file(
        relativePath: { eq: "juvi-haus/marquee/testimonial.png" }
      ) {
        publicURL
        name
        ...homeWorksBigImage
      }

      search: file(relativePath: { eq: "juvi-haus/marquee/search.png" }) {
        publicURL
        name
        ...homeWorksBigImage
      }

      mp: file(relativePath: { eq: "juvi-haus/carousel/mobile-product.png" }) {
        publicURL
        name
        ...homeWorksBigImage
      }

      mp2: file(
        relativePath: { eq: "juvi-haus/carousel/mobile-product-2.png" }
      ) {
        publicURL
        name
        ...homeWorksBigImage
      }

      mp3: file(
        relativePath: { eq: "juvi-haus/carousel/mobile-product-3.png" }
      ) {
        publicURL
        name
        ...homeWorksBigImage
      }

      mp4: file(
        relativePath: { eq: "juvi-haus/carousel/mobile-product-4.png" }
      ) {
        publicURL
        name
        ...homeWorksBigImage
      }

      mp5: file(
        relativePath: { eq: "juvi-haus/carousel/mobile-product-5.png" }
      ) {
        publicURL
        name
        ...homeWorksBigImage
      }

      mp6: file(
        relativePath: { eq: "juvi-haus/carousel/mobile-product-6.png" }
      ) {
        publicURL
        name
        ...homeWorksBigImage
      }

      mp7: file(
        relativePath: { eq: "juvi-haus/carousel/mobile-product-6.png" }
      ) {
        publicURL
        name
        ...homeWorksBigImage
      }

      mp8: file(
        relativePath: { eq: "juvi-haus/carousel/mobile-product-8.png" }
      ) {
        publicURL
        name
        ...homeWorksBigImage
      }
    }
  `);
};

export default useMarqueeAssets;
