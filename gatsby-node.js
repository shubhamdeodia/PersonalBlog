const path = require('path');
// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// // You can delete this file if you're not using it

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
    if (getConfig().mode === 'production') {
        actions.setWebpackConfig({
            devtool: false
        });
    }
};

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;
    const { data } = await graphql(`
        {
            allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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
    `);
    // posts
    const posts = data.allMdx.edges;

    // create blog list
    const postPerPage = 3;
    const numPages = Math.ceil(posts.length / postPerPage);

    Array.from({ length: numPages }).forEach((_, index) => {
        createPage({
            path: index === 0 ? '/' : `/${index + 1}`,
            component: path.resolve(__dirname, './src/templates/allPosts.js'),
            context: {
                limit: postPerPage,
                skip: index * postPerPage,
                numPages,
                currentPage: index + 1
            }
        });
    });

    // Create blog posts pages.
    posts.forEach((post, index) => {
        const { slug } = post.node.frontmatter;
        const { id } = post.node;
        const previous = index === posts.length - 1 ? null : posts[index + 1].node;
        const next = index === 0 ? null : posts[index - 1].node;

        createPage({
            path: slug,
            component: path.resolve(__dirname, './src/templates/singlePost.js'),
            context: { id, previous, next }
        });
    });
};
