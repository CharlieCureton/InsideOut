import React from 'react';
import logo from '../assets/logo-alpha-bg.svg';
import { Link } from 'react-router-dom';

function Logo(props) {
    return (
        <Link to={`/`}>
            <h1 className={"noselect header-logo " + props.size} >
                <img src={logo} className="App-logo" alt="logo" />
                <span>nsideOut</span>
            </h1 >
        </Link>
    );
}

export default Logo;