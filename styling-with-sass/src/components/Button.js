import React from 'react';
import './Button.scss';

function Button( { children }) {
    return <Button className="Button">{children}</Button>;
}

export default Button;