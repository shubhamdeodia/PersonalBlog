import React from 'react';
import { ButtonWrapper } from '../elements';

export function Button({ children, to }) {
    return <ButtonWrapper to={to}>{children}</ButtonWrapper>;
}
