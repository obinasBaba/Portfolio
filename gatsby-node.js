const projects = require('./projects')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /node_modules\/paper/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

// creating 'slug' field for URL string
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath( { node, getNode } );

    createNodeField( {
      node,
      name: "slug",
      value: slug
    } );
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  //data for Project case-study page...

  const data = await graphql(`
    query {
      preview1: file(relativePath: { eq: "sections/projects/preview-11.jpg" }) {
        childImageSharp {
      gatsbyImageData(quality: 100, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED)
    }
      }
      preview2: file(relativePath: { eq: "sections/projects/preview-22.png" }) {
        childImageSharp {
      gatsbyImageData(quality: 100, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED)
    }
      }
      preview3: file(relativePath: { eq: "sections/projects/preview-3.png" }) {
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
      component: require.resolve(`./src/templates/Project`),
      context: {
        project,
        nextProj,
        imageData: {
          headlineImg: imgData[index],
        },
      },
    })
  })
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

  //creating pages for all markdown file with content-key of 'blog'
  result.data.allMarkdownRemark.edges
    .forEach(({node : {fields: {slug}}}) => {
      createPage({
        path: slug,
        component: path.resolve('./src/templates/blog/blog.js'),
        context: {
          slug: slug,
        }
      })
    });


  // pagination( Blogs List page )
  const posts = result.data.allMarkdownRemark.edges;
  const pageSize = 5;
  const pageCount = Math.ceil(posts.length / pageSize); //for 12 = 4
  const templatePath = path.resolve('./src/templates/BlogList/index.js');

  for (let i = 0; i < pageCount; i++) {

    let path = '/blog';
    if (i > 0)
      path += `/${i + 1}`

    createPage({
      path,
      component: templatePath,
      context: {
        limit: pageSize,
        skip: i * pageSize,
        pageCount,
        currentPage: i + 1,
      }
    });
  }

}
