import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ( { children, isOnOn, ...otherProps}) => (
    <button className={`${isOnOn ? 'on-on' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;