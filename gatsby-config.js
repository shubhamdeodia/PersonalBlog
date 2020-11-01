module.exports = {
    siteMetadata: {
        title: 'ShubhamD Blog',
        description: 'Super simple blogs on everything related to UI',
        author: 'Shubham Deodia',
        image: 'https://shubhamdeodia.github.io/shubhamD/static/media/avatar.cfa0a33b.jpg',
        url: 'https://blog.shubhamd.me',
        siteUrl: 'https://blog.shubhamd.me'
    },
    plugins: [
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-preload-fonts',
        'gatsby-plugin-react-svg',
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
                fonts: [
                    'source sans pro\:300,400,400i,700',
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
            resolve: 'gatsby-plugin-page-progress',
            options: {
                height: 3,
                prependToBody: true,
                color: '#EE4C3A',
                footerHeight: 500
            }
        },
        {
            resolve: 'gatsby-plugin-nprogress',
            options: {
                // Setting a color is optional.
                color: '#EE4C3A',
                // Disable the loading spinner.
                showSpinner: true
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
        }
    ]
}
