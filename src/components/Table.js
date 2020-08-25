import React from 'react'
import { TableWrapper } from '../elements'

export function Table({ children }) {
    return (
        <TableWrapper>
            <table>{children}</table>
        </TableWrapper>
    )
}
