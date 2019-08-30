import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const ActionBarComponent = ({
    filterStatus = false,
    searchStatus = false,
    sortBy = '',
    orderBy = 'asc',
    searchQuery = '',
    toggleFilters,
    setSortBy,
    setOrderBy,
    toggleSearch,
    handleSearch,
    clearSearch
}) => {
    return (
        <div className="action-bar">
            <i
                className={`fas fa-filter filter ${filterStatus ? 'active' : ''}`}
                title="filter"
                onClick={toggleFilters}
            ></i>
            <i
                className={`fas fa-search search ${searchStatus ? 'active' : ''}`}
                title="search"
                onClick={toggleSearch}
            ></i>
            {filterStatus && (
                <div className="filter-box">
                    <div className="sort" onClick={setSortBy}>
                        <div className={`sortable ${sortBy === 'id' ? 'active' : ''}`}>ID</div>
                        <div className={`sortable ${sortBy === 'name' ? 'active' : ''}`}>Name</div>
                        <div className={`sortable ${sortBy === 'origin' ? 'active' : ''}`}>Origin</div>
                        <div className={`sortable ${sortBy === 'destination' ? 'active' : ''}`}>Destination</div>
                        <div className={`sortable ${sortBy === 'total' ? 'active' : ''}`}>Total</div>
                        <div className={`sortable ${sortBy === 'status' ? 'active' : ''}`}>Status</div>
                    </div>
                    <div className="order" onClick={setOrderBy}>
                        <i
                            className={`fas fa-sort-alpha-down asc ${orderBy === 'asc' ? 'active' : ''}`}
                            title="asc"
                        ></i>
                        <i
                            className={`fas fa-sort-alpha-down-alt desc ${orderBy === 'desc' ? 'active' : ''}`}
                            title="desc"
                        ></i>
                    </div>
                </div>
            )}
            {searchStatus && (
                <input
                    className="search-input"
                    type="text"
                    autoComplete="off"
                    value={searchQuery}
                    onChange={handleSearch}
                />
            )}
            {searchStatus && searchQuery && (
                <i className="search-clear fas fa-times" title="x" onClick={clearSearch}></i>
            )}
        </div>
    );
};

ActionBarComponent.propTypes = {
    filterStatus: PropTypes.bool.isRequired,
    searchStatus: PropTypes.bool.isRequired,
    sortBy: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    searchQuery: PropTypes.string.isRequired,
    toggleFilters: PropTypes.func.isRequired,
    setSortBy: PropTypes.func.isRequired,
    setOrderBy: PropTypes.func.isRequired,
    toggleSearch: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired,
    clearSearch: PropTypes.func.isRequired
};

export default ActionBarComponent;
