const path = require('path')
// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// // You can delete this file if you're not using it

exports.createPages = async({ actions, graphql }) => {
    const { createPage } = actions
    const { data } = await graphql(`
              {
                allMdx(sort: {fields: frontmatter___date, order: DESC}) {
                    edges {
                      node {
                        id
                        frontmatter {
                          slug
                        }
                      }
                    }
                  }
              }
            `)

    // create paginated pages for post
    const postPerPage = 3
    const numPages = Math.ceil(data.allMdx.edges.length / postPerPage)

    Array.from({ length: numPages }).forEach((_, index) => {
        createPage({
            path: index === 0
                ? '/'
                : `/${index + 1}`,
            component: path.resolve(__dirname, './src/templates/allPosts.js'),
            context: {
                limit: postPerPage,
                skip: index * postPerPage,
                numPages,
                currentPage: index + 1
            }
        })
    })

    // create single blog post

    data.allMdx.edges.forEach((edge) => {
        const slug = edge.node.frontmatter.slug
        const id = edge.node.id

        createPage({
            path: slug,
            component: path.resolve(__dirname, './src/templates/singlePost.js'),
            context: { id }
        })
    })
}
