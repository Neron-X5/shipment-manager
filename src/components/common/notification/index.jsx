import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const NotificationComponent = ({ displayStatus = false, message = '', clickHandler }) => {
    return displayStatus ? (
        <div className="toast-container">
            <span className="toast-message">{message}</span>
            <i className="toast-close fas fa-times" title="close" onClick={clickHandler}></i>
        </div>
    ) : null;
};

NotificationComponent.propTypes = {
    displayStatus: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
};

export default NotificationComponent;
