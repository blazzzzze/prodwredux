import React from 'react';

const ErrorMessage = (props) => {
    return (
        props.showError ? 
        <div className="alert alert-danger">
                <div className="close" onClick={props.onClose}>&times;</div>
            {props.errMessage}
        </div> : null
    );
}

export default ErrorMessage;