import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const NotificationComponent = ({ message = '', clickHandler }) => {
    return (
        <div className="toast-container">
            <span className="toast-message">{message}</span>
            <i className="toast-close fas fa-times" title="x" onClick={clickHandler}></i>
        </div>
    );
};

NotificationComponent.propTypes = {
    message: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
};

export default NotificationComponent;
