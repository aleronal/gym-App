import React from 'react';
import './header.styles.scss';


import { Link } from 'react-router-dom';

const Header = () => {


    return (
        <div className="header">
            <div className="logo">
                <Link className="the-gym" to="/"><span className="the">The </span><span className="gym">Gym</span></Link>
            </div>
            <div className="time">
                <p></p>
            </div>
            <div className="nav">
                <Link className="navbar" to="/">Home</Link>
                <Link className="navbar" to="/about">About</Link>
            </div>
        </div>
    )

}

export default Header;