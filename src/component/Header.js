import React from 'react'
import PropTypes from "prop-types";

const Header = (props) => {
    const title = props.title;
    return (
        <div>
            <nav>
                <div className="nav-wrapper light-blue darken-2">
                    <a className="brand-logo"> {title} </a>
                </div>
            </nav>
        </div>
    )
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header

