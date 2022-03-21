module.exports = {
  siteMetadata: {
    defaultTitle: ` henzzo.com`,
    titleTemplate: 'The Real Hero · %s',
    email: `henokgetachew500@gmail.com`,
    defaultDescription: ` 
      Hi🖖,am henok, a digital designer &amp; 
      developer based in Addis. I build websites of a different 
      kind with a design that capture your imagination.
    `,
    author: `henzzo`,
    twitterUsername: '@henzzo_com',
    siteUrl: 'https://henzzo.com',
    thumbnail: '/thumbnail.jpg',
    image: '/favicon.svg',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-Y2SV1LE72G', // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: "OPT_CONTAINER_ID",
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          // respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          // origin: "YOUR_SELF_HOSTED_ORIGIN",
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    `gatsby-plugin-netlify-cms-paths`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/assets/fonts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `json`,
        path: `${__dirname}/src/assets/json`,
      },
    },

    {
      //sourcing markdown images
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/static/img`,
      },
    },
    {
      //blog
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cms`,
        path: `${__dirname}/src/cms`,
      },
    },

    {
      // markdown file transformer
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          `gatsby-plugin-netlify-cms-paths`,

          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1024,
              withWebp: true,
            },
          },
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: 'carbon',
              theme: 'solarized-light',
              lineNumbers: true,
            },
          },
        ],
      },
    },

    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Henzzo Portfolio`,
        short_name: `henzzo.com`,
        start_url: `/`,
        background_color: `#02021e`,
        theme_color: `#02021e`,
        display: `minimal-ui`,
        scope: '/',
        icons: [
          {
            src: 'static/logo(513).svg',
            type: 'image/svg+xml',
            sizes: '514x546',
          },{
            src: 'static/favicon.ico',
            type: 'image/x-icon',
            sizes: '241x256',
          },
          {
            src: 'static/logo(197).png',
            type: 'image/png',
            sizes: '197x210',
          },
          {
            src: 'static/logo(513).png',
            type: 'image/png',
            sizes: '513x546',
          },
        ],
        description: `Hi, am henok, a digital designer &amp; 
                      developer based in Addis. I build websites of a different 
                      kind with a design that capture your imagination.`,
        screenshots: [
          {
            src: 'static/thumbnail.jpg',
            type: 'image/jpg',
            sizes: '608x322',
          },
        ],
      },
    },
    `gatsby-plugin-gatsby-cloud`,

    // {
    //   resolve: `gatsby-plugin-canonical-urls`,
    //   options: {
    //     siteUrl: `https://henzzo.com`,
    //   },
    // },
  ],
}
