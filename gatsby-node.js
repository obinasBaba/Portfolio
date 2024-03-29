/* eslint-disable spaced-comment */
const path = require( "path" );
const { createFilePath } = require( "gatsby-source-filesystem" );

const { copyLibFiles } = require( "@builder.io/partytown/utils" );

exports.onPreBuild = async () => {
  await copyLibFiles( path.join( __dirname, "static", "~partytown" ) );
};

exports.onCreateWebpackConfig = ( { stage, loaders, actions } ) => {
  if ( stage === "build-html" || stage === "develop-html" ) {
    actions.setWebpackConfig( {
      module: {
        rules: [
          {
            test: /locomotive-scroll/,
            use: loaders.null()
          },
          {
            test: /fullpage.js/,
            use: loaders.null()
          }
        ]
      }
    } );
  }
};


// creating 'slug' field for URL string
exports.onCreateNode = ( { node, getNode, actions } ) => {
  const { createNodeField } = actions;
  if ( node.internal.type === "MarkdownRemark" ) {
    const slug = createFilePath( { node, getNode } );

    createNodeField( {
      node,
      name: "slug",
      value: slug
    } );
  }
};

exports.createPages = async ( { graphql, actions } ) => {
  const { createPage } = actions;

  //data for Project case-study page...
  /*const data = await graphql(`
    query {
      preview1: file(relativePath: { eq: "sections/projects/linkedin.jpg" }) {
        publicURL
        childImageSharp {
      gatsbyImageData(quality: 100, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED)
    }
      }
      preview2: file(relativePath: { eq: "sections/projects/preview-11.jpg" }) {
                publicURL
        childImageSharp {
      gatsbyImageData(quality: 100, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED)
    }
      }
      preview3: file(relativePath: { eq: "sections/projects/food.png" }) {
        publicURL
        childImageSharp {
      gatsbyImageData(quality: 100, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED)
    }
        }
      }`)

  const {preview1, preview2, preview3} = data.data;
  const imgData = [preview1, preview2, preview3]

  projects.forEach((project, index) => {
    // console.log(imgData)
    const nextProj =
      index + 1 <= projects.length ? projects[index + 1] : projects[0]

    createPage({
      path: `/portfolio/${project.slug}/`,
      component: require.resolve(`./src/templates/CaseStudy/index.js`),
      context: {
        project,
        nextProj,
        imageData: {
          headlineImg: imgData[index],
          publicURL: imgData[index].publicURL
        },
      },
    })
  })*/
  // end of project page creation

  //creating pages for each blog post markdown file
  const result = await graphql( `
    query{
      allMarkdownRemark(
         filter: {frontmatter: {contentKey: {eq: "blog"}}}
      ){
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  ` );

  /* //creating pages for all markdown file with content-key of 'blog'
   const edges = result.data.allMarkdownRemark.edges;
   edges.forEach( ( { node: { fields: { slug } } }, index ) => {

       const next = (index + 1 <= edges.length) ? edges[index + 1] : edges[0];

       createPage( {
           path: slug,
           component:
               path.resolve( './src/templates/BlogPage/index.js' ),
           context: {
               slug,
               nextBlog: next ? next.node.fields.slug : edges[0].node.fields.slug
           }
       } )
   } );*/


  // pagination( Blogs List page )
  const posts = result.data.allMarkdownRemark.edges;
  const pageSize = 5;
  const pageCount = Math.ceil( posts.length / pageSize ); //for 12 = 4
  const templatePath = path.resolve( "./src/templates/BlogList/index.js" );

  for ( let i = 0; i < pageCount; i++ ) {

    let blogPath = "/blog";
    if ( i > 0 )
      blogPath += `/${i + 1}`;

    createPage( {
      path: blogPath,
      component: templatePath,
      context: {
        limit: pageSize,
        skip: i * pageSize,
        pageCount,
        currentPage: i + 1
      }
    } );
  }

};
