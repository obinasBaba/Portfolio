module.exports = {
  siteMetadata: {
    title: ` henzzo.com`,
    titleTemplate: "The Real Hero · %s",
    url: "https://www.netlify.henzzo.app",
    email: `henokgetachew500@gmail.com`,
    description: `
      This site is crafted by me the owner, Henzzo
       and i use it to show my skill through my projects and
        hope to inspire and motivate developers like me. I talk about 
        how i made it in my blogs.
    `,
    author: `Henzzo`,
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

    { //sourcing markdown images
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/static/img`
      }
    },
    { //blog
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cms`,
        path: `${__dirname}/src/cms`
      }
    },

    {  // markdown file transformer
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          `gatsby-plugin-netlify-cms-paths`,

          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1024,
              withWebp: true
            }
          },
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: 'carbon',
              theme: 'solarized-light',
              lineNumbers: true
            }
          },

        ]
      }
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
