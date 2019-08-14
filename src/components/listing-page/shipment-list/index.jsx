import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import ShipmentListItem from '../shipment-list-item';

const ShipmentListComponent = ({ shipments = [] }) => {
    const header = {
        id: 'ID',
        name: 'Name',
        origin: 'Origin',
        destination: 'Destination',
        status: 'Status',
        total: 'Total'
    };
    return (
        <Fragment>
            <ShipmentListItem className="shipment-list-item" key={'0_0'} shipment={header} title={true} />
            {shipments.map(item => {
                const { id } = item;
                return <ShipmentListItem className="shipment-list-item" key={id} shipment={item} />;
            })}
        </Fragment>
    );
};

ShipmentListComponent.propTypes = {
    shipments: PropTypes.array.isRequired
};

export default ShipmentListComponent;
