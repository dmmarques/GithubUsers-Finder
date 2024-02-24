import React from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';

//Since we're passing in simple props, we can destructure them like this
const NavBar = ({ icon }) => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            {/* The comment below is here to avoid that Prettier breakes all JSX lines that contain a ' '*/}
            {/* prettier-ignore */}
            <div class="container-fluid">
                <a class="navbar-brand" href="#"> Welcome </a>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/"> Home </Link>
                        </li>
                    </ul>
                    <i className={icon} style={{paddingRight:'10px'}}/>
                    <span class="navbar-text" style={{padding:'10px'}}>
                        <Link class="nav-link active" to='/about'>About Us</Link>
                    </span>
                    <span class="navbar-text">Copyright 2024. All Rights Reserved</span>
                </div>
            </div>
        </nav>
    );
};

NavBar.defaultProps = {
    icon: 'fab fa-github',
};

NavBar.propTypes = {
    icon: PropTypes.string.isRequired,
};

export default NavBar;
