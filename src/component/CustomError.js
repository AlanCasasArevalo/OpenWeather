import React from 'react'
import PropTypes from "prop-types";

const CustomError = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m6 offset-3">
                    <div className="card-panel red darken-4 error">
                        { props.message }
                    </div>
                </div>
            </div>
        </div>
    )
};

CustomError.propTypes = {
    message: PropTypes.string.isRequired
};
export default CustomError
