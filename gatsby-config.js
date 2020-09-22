module.exports = {
    siteMetadata: {
        title: 'ShubhamD Blog',
        description: 'Super simple blogs on everything related to UI',
        author: '@shubhamD',
        image: 'https://shubhamdeodia.github.io/shubhamD/static/media/avatar.cfa0a33b.jpg',
        url: 'shubhamd.me'
    },
    plugins: [
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-react-svg',
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
                fonts: [
                    'source sans pro\:300,400,400i,700',
                    'Montserrat\:300,400,400i,700', // you can also specify font weights and styles
                    'Roboto Mono'
                ],
                display: 'swap'
            }
        },
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
