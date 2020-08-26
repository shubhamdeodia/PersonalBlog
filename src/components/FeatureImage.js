import React from 'react'
import Img from 'gatsby-image'
import { FeatureImageWrapper } from '../elements'
import Particles from 'react-particles-js'
import particlesSvg from '../images/deer.svg'

export const FeatureImage = ({ fluid, showParticles }) => {
    // const data = useStaticQuery(graphql`
    //     query {
    //         featureimage: file(relativePath: { eq: "starrynight.jpg" }) {
    //             childImageSharp {
    //                 fluid(quality: 90) {
    //                     ...GatsbyImageSharpFluid
    //                 }
    //             }
    //         }
    //     }
    // `)

    return (

        <FeatureImageWrapper>
            {
                showParticles
                    ? <Particles
                        height='350px'
                        params={{
                            'fps_limit': 28,
                            'particles': {
                                'collisions': {
                                    'enable': false
                                },
                                // 'color': {
                                //     'value': '#000000'
                                // },
                                'number': {
                                    'value': 200,
                                    'density': {
                                        'enable': false
                                    }
                                },
                                'line_linked': {
                                    'enable': true,
                                    'distance': 30,
                                    'opacity': 0.4
                                    // 'color': {
                                    //     'value': '#000000'
                                    // }
                                },
                                'move': {
                                    'speed': 1
                                },
                                'opacity': {
                                    'anim': {
                                        'enable': true,
                                        'opacity_min': 0.05,
                                        'speed': 1,
                                        'sync': false
                                    },
                                    'value': 0.4
                                }
                            },
                            'polygon': {
                                'enable': true,
                                'scale': 0.5,
                                'type': 'inline',
                                'move': {
                                    'radius': 10
                                },
                                'url': particlesSvg,
                                'inline': {
                                    'arrangement': 'equidistant'
                                },
                                'draw': {
                                    'enable': true,
                                    'stroke': {
                                        'color': 'rgba(255, 255, 255, .2)'
                                    }
                                }
                            },
                            'retina_detect': false,
                            'interactivity': {
                                'events': {
                                    'onhover': {
                                        'enable': true,
                                        'mode': 'bubble'
                                    }
                                },
                                'modes': {
                                    'bubble': {
                                        'size': 6,
                                        'distance': 40
                                    }
                                }
                            }
                        }} />

                    : <Img fluid={fluid} style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: '100%',
                        height: '100%'
                    }} />
            }

        </FeatureImageWrapper>
    )
}
