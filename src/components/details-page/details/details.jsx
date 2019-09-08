import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Notification from '../../common/notification';
import { loadShipmentDetails, renameShipment, closeToast } from '../../../actions/details';
import { capitalize } from '../../../utility/string-utils';
import { APP_CONSTANTS } from '../../../configs/constants';

import './style.scss';

export class DetailsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.loadShipmentDetails(this.props.match.params.shipmentId);
    }

    editName = () => {
        const newName = prompt('Please enter Shipment name', this.props.shipment.name);
        if (newName) {
            this.props.renameShipment(this.props.shipment, this.props.match.params.shipmentId, newName);
        }
    };

    render() {
        const { loading, shipment, error } = this.props;
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
        } = shipment;
        return (
            <Fragment>
                <main className='details-page'>
                    {/* TODO: Use React lazy & Suspense */}
                    {loading && <div className='loading'>Loading...</div>}
                    <div className='details-container'>
                        <div className='action-bar'>
                            <Link to='/'>
                                <i className='fas fa-chevron-left chevron'>{` Back`}</i>
                            </Link>
                            {!!shipment.id && <i className='far fa-edit edit' onClick={this.editName}>{` Edit`}</i>}
                        </div>
                        {!error && !!shipment.id && (
                            <div className='details'>
                                <div className='shipment-id'>
                                    Shipment ID: <code>{id}</code>
                                </div>
                                <div>
                                    Customer ID: <code>{userId}</code>
                                </div>
                                <div className='name'>
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
                        )}
                    </div>
                </main>
                <Notification displayStatus={error} message={APP_CONSTANTS.ERROR_MESSAGE} clickHandler={closeToast} />
            </Fragment>
        );
    }
}

DetailsComponent.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    shipment: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    loading: state.details.loading || false,
    error: state.details.error || false,
    shipment: state.details.shipment || {}
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    loadShipmentDetails: shipmentId => dispatch(loadShipmentDetails(shipmentId)),
    renameShipment: (shipment, shipmentId, name) => dispatch(renameShipment(shipment, shipmentId, name)),
    closeToast: () => dispatch(closeToast())
});

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailsComponent);

export default Container;
