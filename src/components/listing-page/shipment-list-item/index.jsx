import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { capitalize } from '../../../utility/string-utils';

import './style.scss';

const ShipmentListItemComponent = ({ shipment = {}, title = false }) => {
    const { id, name, origin, destination, status, total } = shipment;
    return (
        <div className={`list-item ${title ? 'title' : ''}`}>
            <span className="item-col id">{id}</span>
            <span className="item-col">{name}</span>
            <span className="item-col">{origin}</span>
            <span className="item-col">{destination}</span>
            <span className="item-col">{`${!title ? '$' : ''}${total}`}</span>
            <span
                className={`item-col status ${
                    status === 'ACTIVE'
                        ? 'active'
                        : status === 'COMPLETED'
                        ? 'completed'
                        : status === 'NEW'
                        ? 'new'
                        : ''
                }`}
            >
                {capitalize(status)}
            </span>
            {!title && (
                <Link to={`/${id}`}>
                    <i className="fas fa-chevron-right item-col chevron"></i>
                </Link>
            )}
        </div>
    );
};

ShipmentListItemComponent.propTypes = {
    shipment: PropTypes.object.isRequired,
    title: PropTypes.bool
};

export default ShipmentListItemComponent;
