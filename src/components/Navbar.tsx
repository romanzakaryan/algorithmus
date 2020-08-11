import React from 'react';

const Navbar: React.FC = () => (
    <nav>
        <div className="nav-wrapper container">
            <a href="/" className="brand-logo">
                Logo
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="/">Algorithms</a></li>
                <li><a href="/">About</a></li>
            </ul>
        </div>
    </nav>
)

export default Navbar;
