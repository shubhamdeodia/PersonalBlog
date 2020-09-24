/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Theme from './src/themes/theme'
import { MDXProvider } from '@mdx-js/react'
import { Table, Code } from './src/components'
import { preToCodeBlock } from 'mdx-utils'
import './language-tabs.css'

export const onInitialClientRender = () => {
    setTimeout(function() {
        document.getElementById('___loader').style.display = 'none'
    }, 1000)
}

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border;
        margin: 0;
        padding: 0;
    }

    body, html {
        font-family: ${(props) => props.theme.fonts.main};
        height: 100%;
        transition: opacity 500ms ease-out;
        background-color:  ${(props) => props.theme.colors.light1};

    }
`

// components are stable
const components = {
    table: Table,
    pre: (preProps) => {
        const props = preToCodeBlock(preProps)
        // if there's a codeString and some props, we passed the test
        if (props) {
            return <Code {...props} />
        }
        // it's possible to have a pre without a code in it
        return <pre {...preProps} />
    },
    wrapper: ({ children }) => <>{children}</>
}

export const wrapRootElement = ({ element }) => (
    <MDXProvider components={components}>
        <ThemeProvider theme={Theme}>
            <GlobalStyles />
            {element}
        </ThemeProvider>
    </MDXProvider>
)

// You can delete this file if you're not using it

