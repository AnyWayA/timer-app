import React from 'react';

const Layout = ({children}) => {
    return (
        <div sryle={{position: 'relative'}}>
            {children}
        </div>
    );
};

export default Layout;
