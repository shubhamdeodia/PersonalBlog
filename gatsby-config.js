module.exports = {
    siteMetadata: {
        title: 'ShubhamD Blog',
        description: 'Super simple blogs on everything related to UI',
        author: '@shubhamD',
        image: './src/images/radio.jpg',
        url: 'https://github.com/shubhamdeodia'
    },
    plugins: [
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-react-svg',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: `${__dirname}/src/pages/`
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/src/posts/`
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`
            }
        },
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                extensions: ['.md', '.mdx'],
                gatsbyRemarkPlugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 1200
                        }
                    }
                ]
            }
        },
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                custom: {
                    families: ['FS Albert Pro'],
                    // dont put fonts in the same location as font.css
                    urls: ['font.css']
                }
            }
        }
    ]
}
