import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Notification from '../../notification';
import { loadShipments, closeToast, renameShipment } from '../../../actions/shipment';
import { capitalize } from '../../../utility/string-utils';

import './style.scss';

class ShipmentDetailsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.loadShipment(`shipments?q=${this.props.match.params.shipmentId}`);
    }

    editName = () => {
        const newName = prompt('Please enter Shipment name', this.props.shipments[0].name);
        if (newName) {
            this.props.renameShipment(this.props.shipments[0], this.props.match.params.shipmentId, newName);
        }
    };

    render() {
        const { shipments, error } = this.props;
        const {
            id = '',
            userId = '',
            name = '',
            origin = '',
            destination = '',
            status = '',
            total = '',
            mode = '',
            cargo = [],
            services = []
        } = shipments[0] || {};
        return (
            <Fragment>
                <main className="details-container">
                    <Link to="/">
                        <i className="fas fa-chevron-left chevron">{` Back`}</i>
                    </Link>
                    {!!shipments.length && (
                        <Fragment>
                            <i className="far fa-edit edit" onClick={this.editName}>{` Edit`}</i>
                            <div className="details">
                                <div>
                                    Shipment ID: <code>{id}</code>
                                </div>
                                <div>
                                    Customer ID: <code>{userId}</code>
                                </div>
                                <div>
                                    Name: <code>{name}</code>
                                </div>
                                <div>
                                    Origin: <code>{origin}</code>
                                </div>
                                <div>
                                    Destination: <code>{destination}</code>
                                </div>
                                <div>
                                    Status: <code>{capitalize(status)}</code>
                                </div>
                                <div>
                                    Cost: <code>{`$${total}`}</code>
                                </div>
                                <div>
                                    Mode: <code>{capitalize(mode)}</code>
                                </div>
                                <div>
                                    {`Cargo:`}
                                    {cargo.map((item, index) => (
                                        <code key={index}>
                                            <br />
                                            {`${index + 1}. `}
                                            <span>{item.volume}</span>
                                            {` x `}
                                            <span>{item.description}</span>
                                            {/* {<span>{item.type}</span>} */}
                                        </code>
                                    ))}
                                </div>
                                <div>
                                    {`Services:`}
                                    {services.map((item, index) => (
                                        <code key={index}>
                                            <br />
                                            {`${index + 1}. `}
                                            {capitalize(item.type)}
                                        </code>
                                    ))}
                                </div>
                            </div>
                        </Fragment>
                    )}
                </main>
                {error && (
                    <Notification
                        message={'Could not fetch the data. Please try again in a moment.'}
                        clickHandler={closeToast}
                    />
                )}
            </Fragment>
        );
    }
}

ShipmentDetailsComponent.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    shipments: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    loading: state.list.loading || false,
    error: state.list.error || false,
    shipments: state.list.shipments || []
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    loadShipment: url => dispatch(loadShipments(url)),
    renameShipment: (shipment, shipmentId, name) => dispatch(renameShipment(shipment, shipmentId, name)),
    closeToast: () => dispatch(closeToast())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShipmentDetailsComponent);
