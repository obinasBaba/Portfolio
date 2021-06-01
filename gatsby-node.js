const projects = require('./projects')


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

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

  console.log(data)
  // console.log(preview1, preview2, preview3)


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
}
