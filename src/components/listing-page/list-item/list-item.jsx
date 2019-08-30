import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { capitalize } from '../../../utility/string-utils';

import './style.scss';

const renderListTitle = shipmentData => {
    const { id, name, origin, destination, status, total } = shipmentData;
    return (
        <div className="list-item title">
            <div className="item-details">
                <span className="item-col id">{id}</span>
                <span className="item-col">{name}</span>
                <span className="item-col origin">{origin}</span>
                <span className="item-col">{destination}</span>
                <span className="item-col total">{total}</span>
                <span className="item-col">{status}</span>
            </div>
        </div>
    );
};
const renderListItem = shipmentData => {
    const { id, name, origin, destination, status, total } = shipmentData;
    return (
        <Fragment>
            <Link to={`/${id}`} className="item-link">
                <div className="list-item">
                    <div className="item-details">
                        <span className="item-col id">{id}</span>
                        <span className="item-col">{name}</span>
                        <span className="item-col origin">{origin}</span>
                        <span className="item-col">{destination}</span>
                        <span className="item-col total">{`$${total}`}</span>
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
                    </div>
                    <div className="chevron">
                        <i className="fas fa-chevron-right item-col"></i>
                    </div>
                </div>
            </Link>
        </Fragment>
    );
};

const ListItemComponent = ({ shipment = {}, title = false }) => {
    return title ? renderListTitle(shipment) : renderListItem(shipment);
};

ListItemComponent.propTypes = {
    shipment: PropTypes.object.isRequired,
    title: PropTypes.bool
};

export default ListItemComponent;
