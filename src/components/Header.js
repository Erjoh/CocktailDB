import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className={'header'}>
            <h3>
                <Link to={'/'}>Karaoke-Bar Zapoi</Link>
            </h3>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
            </nav>
        </div>
    );
};

export default Header;