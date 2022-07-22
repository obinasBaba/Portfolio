module.exports = {
  siteMetadata: {
    defaultTitle: ` henzzo.com`,
    titleTemplate: "The Real Hero · %s",
    email: `henokgetachew500@gmail.com`,
    defaultDescription: ` 
      Hi🖖,am henok, a digital designer &amp; 
      developer based in Addis. I build websites of a different 
      kind with a design that capture your imagination.
    `,
    author: `henzzo`,
    twitterUsername: "@henzzo_com",
    siteUrl: "https://henzzo.com",
    thumbnail: "/thumbnail2.jpg",
    image: "/favicon.svg"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms-paths`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/assets/fonts`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `json`,
        path: `${__dirname}/src/assets/json`
      }
    },

    {
      // sourcing markdown images
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/static/img`
      }
    },
    {
      // blog
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cms`,
        path: `${__dirname}/src/cms`
      }
    },

    {
      // markdown file transformer
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          `gatsby-plugin-netlify-cms-paths`,

          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1024,
              withWebp: true
            }
          },
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: "carbon",
              theme: "solarized-light",
              lineNumbers: true
            }
          }
        ]
      }
    },

    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true
        }
      }
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
        scope: "/",
        icons: [
          {
            src: "logo(513).svg",
            type: "image/svg+xml",
            sizes: "514x546"
          }, {
            src: "favicon.ico",
            type: "image/x-icon",
            sizes: "241x256"
          },
          {
            src: "logo(197).png",
            type: "image/png",
            sizes: "197x210"
          }, {
            src: "logo_194.png",
            type: "image/png",
            sizes: "194x194"
          },
          {
            src: "logo(513).png",
            type: "image/png",
            sizes: "514x546"
          }
        ],
        description: `Hi, am henok, a digital designer &amp; 
                      developer based in Addis. I build websites of a different 
                      kind with a design that capture your imagination.`,
        screenshots: [
          {
            src: "thumbnail.jpg",
            type: "image/jpg",
            sizes: "608x322"
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [
          `/`,
          `/projects/`,
          `/projects/*`,
          `/about/`,
          `/blog/`,
          `/blog/*`,
          `/contact/`,
          // `/thanks/`,
          `/404/`
        ]
      }
    },
    `gatsby-plugin-gatsby-cloud`,

    {
      resolve: `gatsby-plugin-sass`
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@style": "./src/styles/sass-styles/index.scss",
          "@styles": "./src/styles/sass-styles/*",
          "@/styles/*": "./src/styles/sass-styles/*"
        },
        extensions: ["js", "sass", "scss", "ts", "tsx", "css"]
      }
    }
  ]
};
