/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const projects = require('./projects')

  projects.forEach((project, index) => {

    const nextProj = ( (index + 1) <= projects.length ) ? projects[index + 1] : projects[0]

    createPage({
      path: `/portfolio/${project.slug}/`,
      component: require.resolve( `./src/templates/Project` ),
      context: { project, nextProj},
    });
  })

}