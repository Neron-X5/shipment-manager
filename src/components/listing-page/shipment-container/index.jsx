import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { APP_CONSTANTS } from '../../../configs/constants';
import { loadShipments, closeToast } from '../../../actions/shipment';

import ActionBar from '../action-bar';
import PaginationBar from '../pagination-bar';
import Notification from '../../notification';
import ShipmentList from '../shipment-list';

import './style.scss';

class ShipmentContainerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            limit: APP_CONSTANTS.PAGE_LIMIT,
            filterStatus: false,
            sortBy: '',
            orderBy: 'asc',
            searchStatus: false,
            searchQuery: ''
        };
    }

    componentDidMount() {
        this.fetchShipments({});
    }

    fetchShipments = ({
        query = this.state.searchQuery,
        page = this.state.page,
        sortBy = this.state.sortBy,
        orderBy = this.state.orderBy
    }) => {
        this.props.loadShipments(
            `shipments?q=${query}&_page=${page}&_limit=${this.state.limit}&_sort=${sortBy}&_order=${orderBy}`
        );
    };

    toggleFilters = event => {
        this.setState(prevState => ({ filterStatus: !prevState.filterStatus, searchStatus: false }));
    };

    setSortBy = event => {
        const sort = (event.target.innerText || 'id').toLowerCase();
        this.setState(() => ({ sortBy: sort }));
        this.fetchShipments({ sortBy: sort });
    };

    setOrderBy = event => {
        const order = event.target.getAttribute('title') || 'asc';
        this.setState(() => ({ orderBy: order }));
        this.fetchShipments({ orderBy: order });
    };

    toggleSearch = event => {
        this.setState(prevState => ({ searchStatus: !prevState.searchStatus, searchQuery: '', filterStatus: false }));
        this.fetchShipments({ query: '', page: 1 });
    };

    onSearch = (query = '') => {
        this.setState({ searchQuery: query, page: 1 });
        this.fetchShipments({ query, page: 1 });
    };

    handleSearch = event => {
        const query = event.target.value || '';
        this.onSearch(query);
    };

    clearSearch = () => {
        this.onSearch('');
    };

    changePage = (direction = 'next') => {
        const page = direction === 'next' ? this.state.page + 1 : this.state.page - 1;
        this.setState(() => {
            return { page };
        });
        this.fetchShipments({ page });
    };

    render() {
        const { loading, shipments, error, closeToast } = this.props;
        return (
            <main className="listing-container">
                {loading && <div className="loading">Loading...</div>}
                {shipments.length && (
                    <Fragment>
                        <ActionBar
                            filterStatus={this.state.filterStatus}
                            searchStatus={this.state.searchStatus}
                            sortBy={this.state.sortBy}
                            orderBy={this.state.orderBy}
                            searchQuery={this.state.searchQuery}
                            toggleFilters={this.toggleFilters}
                            setSortBy={this.setSortBy}
                            setOrderBy={this.setOrderBy}
                            toggleSearch={this.toggleSearch}
                            handleSearch={this.handleSearch}
                            clearSearch={this.clearSearch}
                        />
                        <div className="list">
                            <ShipmentList className="list" shipments={shipments} />
                        </div>
                        <PaginationBar
                            page={this.state.page}
                            limit={this.state.limit}
                            shipmentsLength={shipments.length}
                            changePage={this.changePage}
                        />
                    </Fragment>
                )}
                {error && (
                    <Notification
                        message={'Could not fetch the data. Please try again in a moment.'}
                        clickHandler={closeToast}
                    />
                )}
            </main>
        );
    }
}

ShipmentContainerComponent.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    shipments: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    loading: state.list.loading || false,
    error: state.list.error || false,
    shipments: state.list.shipments || []
});

const mapDispatchToProps = dispatch => ({
    loadShipments: url => dispatch(loadShipments(url)),
    closeToast: () => dispatch(closeToast())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShipmentContainerComponent);
