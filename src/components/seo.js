/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

function Seo({ description, lang = 'en', meta, title, pathname }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle
            defaultDescription
            siteUrl
            twitterUsername
            thumbnail
            titleTemplate
            image
            author
            thumbnail
          }
        }
      }
    `
  )

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    image,
    author,
    twitterUsername,
    thumbnail,

  } = site.siteMetadata;

  const seoMapping = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    thumbnail: `${siteUrl}${thumbnail}`,
    url: `${siteUrl}${pathname}`,
  };

  const schema = {
    "@context": "schema.org",
    "@type":"Organization",
    "@id": "https://henzzo.com/#website",
    "name":"henzzo portfolio",
    "url": "https://henzzo.com/",
    "logo":"https://henzzo.com/favicon.svg",
    "contactPoint":
        [
          {
            "@type": "ContactPoint",
            "telephone": "+251923365539",
            "contactType": "",
            "areaServed": ""
          }
        ],
    "sameAs": [
      "https://twitter.com/@henzzo_com",
      "https://github.com/obinasBaba/",
      "https://www.linkedin.com/in/henok-getachew-b125b3126/"
    ],
  };

/*  const schema = {
    "@context": 'https://schema.org',
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://henzzo.com/#henzzo",
        "name": "Henok Getachew",
        "url": "https://henzzo.com/",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "LD_02_0237 St",
          "addressLocality": "Addis Ababa",
          "postalCode": "1000",
          "addressCountry": "AA"
        },
        "contactPoint":
            [
              {
                "@type": "ContactPoint",
                "telephone": "+251923365539",
                "contactType": "",
                "areaServed": ""
              }
            ],
      },
      {
        "@type": "WebSite",
        "@id": "https://henzzo.com/#website",
        "url": "https://henzzo.com/",
        "name": "Henzzo Portfolio",
        "publisher": { "@id": "https://henzzo.com/#henzzo" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://henzzo.com/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        "contactPoint":
            [
              {
                "@type": "ContactPoint",
                "telephone": "+251923365539",
                "contactType": "",
                "areaServed": ""
              }
            ],
        "sameAs": [
          "https://twitter.com/@henzzo_com",
          "https://github.com/obinasBaba/",
          "https://www.linkedin.com/in/henok-getachew-b125b3126/"
        ],
        "logo": {
          "@type": "ImageObject",
          "@id": "https://henzzo.com/#logo",
          url: "https://henzzo.com/thumbnail.jpg",
          width: 608,
          height: 322,
          caption: 'Henzzo Portfolio',
        },
        image: { '@id': 'https://henzzo.com/#logo' },
        "author": [
          {
            "@type": "Person",
            "url": "https://henzzo.com/",
            "name": "Henzzo Portfolio",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10028 Jasper Ave",
              "addressLocality": "Edmonton",
              "addressRegion": "AB",
              "postalCode": "T5J 1V9",
              "addressCountry": "CA"
            }
          }
        ]
      },
      {
        '@type': 'WebPage',
        '@id': 'https://henzzo.com/#webpage',
        url: 'https://henzzo.com/',
        inLanguage: 'en-US',
        name: 'Home &mdash; Henzzo',
        isPartOf: { '@id': 'https://henzzo.com/#website' },
        about: { '@id': 'https://henzzo.com/#henzzo' },
        datePublished: '2021-02-27T12:02:41+00:00',
        dateModified: '2022-04-10T07:31:56+00:00',
      },
    ],
  };*/


  return (
      <Helmet
          titleTemplate={defaultTitle ? `${defaultTitle} ·  %s` : null}
      >
        {/* Encodings and styles */}
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta
            content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes"
            name="viewport"
        />

        <meta
            content="ui/ux design, web designer, ux designer portfolio, design and development portfolio,
             design driven development, design and development freelancer portfolio, design consultant portfolio, ui ux designer portfolio,
              ui design expert freelancer portfolio, ux design consultancy, ui expert,
               user interface designer, ui ux designer, ui ux design freelancer, ui design portfolio, ui portfolio,
               best design portfolio, best design and development portfolio,
               top development freelancer portfolio, reactjs development, gatsbyjs development, next.js development, websites, web development, front-end development"
            name="keywords"
        />
        <meta content={author} name="author" />
        <title>{seoMapping.title}</title>
        <meta content={seoMapping.description} name="description" />

        {/* <!-- General meta -->  */}
        <meta content={seoMapping.thumbnail} name="image" />
        <link href="https://www.henzzo.com/" rel="canonical"/>


        {/* <!-- Twitter meta --> */}
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={twitterUsername} name="twitter:creator" />
        <meta content={seoMapping.thumbnail} name="twitter:image" />
        <meta content={defaultTitle} name="twitter:title" />
        <meta content={defaultDescription} name="twitter:description" />
        <meta content={siteUrl} name="twitter:url" />


        {/* <!-- Facebook meta --> */}
        <meta content={siteUrl} property="og:site_name" />
        <meta content={defaultTitle} property="og:title" />
        <meta content={defaultDescription} property="og:description" />
        <meta content="website" property="og:type" />
        <meta content={seoMapping.thumbnail} property="og:image" />
        <meta content={siteUrl} property="og:url" />
        <meta property="og:locale" content="en_US" />

        {/* Micro data */}
        <script type="application/ld+json">{JSON.stringify(schema)}</script>

      </Helmet>
  );

}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
