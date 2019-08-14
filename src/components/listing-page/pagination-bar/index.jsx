import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const PaginationBarComponent = ({ page = 1, limit = 1, shipmentsLength = 0, changePage }) => {
    return (
        <div className="pagination-bar">
            {page > 1 && (
                <i
                    className="fas fa-chevron-left previous"
                    title="previous"
                    onClick={() => {
                        changePage('previous');
                    }}
                ></i>
            )}
            <span className="page-number">{page}</span>
            {shipmentsLength >= limit && (
                <i
                    className="fas fa-chevron-right next"
                    title="next"
                    onClick={() => {
                        changePage('next');
                    }}
                ></i>
            )}
        </div>
    );
};

PaginationBarComponent.propTypes = {
    page: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    shipmentsLength: PropTypes.number.isRequired,
    changePage: PropTypes.func.isRequired
};

export default PaginationBarComponent;
