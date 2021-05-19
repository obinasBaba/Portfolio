/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const projects = require('./projects')

  projects.forEach((projects, index) => {
    createPage({
      path: `/portfolio/${projects.slug}/`,
      component: require.resolve( `./src/templates/Project` ),
      context: { index},
    });
  })

}