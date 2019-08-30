import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import ListItem from '../list-item';

const ListComponent = ({ shipments = [] }) => {
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
            <ListItem className="shipment-list-item" key={'0_0'} shipment={header} title={true} />
            {shipments.map(item => {
                const { id } = item;
                return <ListItem className="shipment-list-item" key={id} shipment={item} />;
            })}
        </Fragment>
    );
};

ListComponent.propTypes = {
    shipments: PropTypes.array.isRequired
};

export default ListComponent;
