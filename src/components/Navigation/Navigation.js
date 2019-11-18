import React from 'react';
import logo from './logo.png';

const Navigation = () => {
    return (
        <nav style={{display: 'flex', justifyContent: 'space-between', paddingLeft: 40, paddingRight: 40}}>
            <div>
                <img src={logo} alt='logo' width="170" height="auto" />
            </div>
        </nav>
    )
}

export default Navigation;