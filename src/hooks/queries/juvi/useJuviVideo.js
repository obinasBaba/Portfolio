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

const useJuviVideo = () => {
  return useStaticQuery(graphql`
    query {
      introMp4: file(relativePath: { eq: "juvi-haus/videos/intro/intro.mp4" }) {
        publicURL
      }

      introWebm: file(
        relativePath: { eq: "juvi-haus/videos/intro/intro.webm" }
      ) {
        publicURL
      }

      introPlaceholder: file(
        relativePath: { eq: "juvi-haus/videos/intro/intro.png" }
      ) {
        publicURL
        name
        ...homeWorksBigImage
      }

      cartMp4: file(
        relativePath: { eq: "juvi-haus/videos/addtocart/addtocart.mp4" }
      ) {
        publicURL
      }

      cartWebm: file(
        relativePath: { eq: "juvi-haus/videos/addtocart/addtocart.webm" }
      ) {
        publicURL
      }

      cartPlaceholder: file(
        relativePath: { eq: "juvi-haus/videos/addtocart/addtocart.png" }
      ) {
        publicURL
        name
        ...homeWorksBigImage
      }

      checkoutMp4: file(
        relativePath: { eq: "juvi-haus/videos/checkout/checkout.mp4" }
      ) {
        publicURL
      }

      checkoutWebm: file(
        relativePath: { eq: "juvi-haus/videos/checkout/checkout.webm" }
      ) {
        publicURL
      }

      checkoutPlaceholder: file(
        relativePath: { eq: "juvi-haus/videos/checkout/checkout.png" }
      ) {
        publicURL
        name
        ...homeWorksBigImage
      }

      filterMp4: file(
        relativePath: { eq: "juvi-haus/videos/filter/filter.mp4" }
      ) {
        publicURL
      }

      filterWebm: file(
        relativePath: { eq: "juvi-haus/videos/filter/filter.webm" }
      ) {
        publicURL
      }

      filterPlaceholder: file(
        relativePath: { eq: "juvi-haus/videos/filter/filter.png" }
      ) {
        publicURL
        name
        ...homeWorksBigImage
      }

      heroMp4: file(relativePath: { eq: "juvi-haus/videos/hero/hero.mp4" }) {
        publicURL
      }

      heroWebm: file(relativePath: { eq: "juvi-haus/videos/hero/hero.webm" }) {
        publicURL
      }

      heroPlaceholder: file(
        relativePath: { eq: "juvi-haus/videos/hero/hero.png" }
      ) {
        publicURL
        name
        ...homeWorksBigImage
      }

      navmenuMp4: file(
        relativePath: { eq: "juvi-haus/videos/navmenu/navmenu.mp4" }
      ) {
        publicURL
      }

      navmenuWebm: file(
        relativePath: { eq: "juvi-haus/videos/navmenu/navmenu.webm" }
      ) {
        publicURL
      }

      navmenuPlaceholder: file(
        relativePath: { eq: "juvi-haus/videos/navmenu/navmenu.png" }
      ) {
        publicURL
        name
        ...homeWorksBigImage
      }

      productMp4: file(
        relativePath: { eq: "juvi-haus/videos/product/product.mp4" }
      ) {
        publicURL
      }

      productWebm: file(
        relativePath: { eq: "juvi-haus/videos/product/product.webm" }
      ) {
        publicURL
      }

      productPlaceholder: file(
        relativePath: { eq: "juvi-haus/videos/product/product.png" }
      ) {
        publicURL
        name
        ...homeWorksBigImage
      }

      searchMp4: file(
        relativePath: { eq: "juvi-haus/videos/search/search.mp4" }
      ) {
        publicURL
      }

      searchWebm: file(
        relativePath: { eq: "juvi-haus/videos/search/search.webm" }
      ) {
        publicURL
      }

      searchPlaceholder: file(
        relativePath: { eq: "juvi-haus/videos/search/search.png" }
      ) {
        publicURL
        name
        ...homeWorksBigImage
      }
    }
  `);
};

export default useJuviVideo;

export function useJuviCarouselDesktopVid() {
  const {
    cartMp4,
    cartWebm,
    cartPlaceholder,
    checkoutMp4,
    checkoutWebm,
    checkoutPlaceholder,
    filterMp4,
    filterWebm,
    filterPlaceholder,
    heroMp4,
    heroWebm,
    heroPlaceholder,
    navmenuMp4,
    navmenuWebm,
    navmenuPlaceholder,
    productMp4,
    productWebm,
    productPlaceholder,
    searchMp4,
    searchWebm,
    searchPlaceholder,
  } = useJuviVideo();

  return [
    {
      mp4: cartMp4.publicURL,
      webm: cartWebm.publicURL,
      img: cartPlaceholder,
    },
    {
      mp4: checkoutMp4.publicURL,
      webm: checkoutWebm.publicURL,
      img: checkoutPlaceholder,
    },

    {
      mp4: filterMp4.publicURL,
      webm: filterWebm.publicURL,
      img: filterPlaceholder,
    },

    {
      mp4: heroMp4.publicURL,
      webm: heroWebm.publicURL,
      img: heroPlaceholder,
    },

    {
      mp4: navmenuMp4.publicURL,
      webm: navmenuWebm.publicURL,
      img: navmenuPlaceholder,
    },

    {
      mp4: productMp4.publicURL,
      webm: productWebm.publicURL,
      img: productPlaceholder,
    },

    {
      mp4: searchMp4.publicURL,
      webm: searchWebm.publicURL,
      img: searchPlaceholder,
    },
  ];
}
