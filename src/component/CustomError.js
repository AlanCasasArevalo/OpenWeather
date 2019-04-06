import React from 'react'

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
}

export default CustomError
