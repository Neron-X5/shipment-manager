import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ReduxStore from '../../reducers/store';

import ShipmentContainer from '../listing-page/shipment-container';
import ShipmentDetails from '../details-page/shipment-details';

import './style.scss';

class AppComponent extends Component {
    render() {
        return (
            <div className="app-container">
                <header className="header">Shipment Manager</header>
                <Provider store={ReduxStore}>
                    <Router>
                        <Switch>
                            <Route exact={true} path="/" render={props => <ShipmentContainer {...props} />} />
                            <Route exact={true} path="/:shipmentId" render={props => <ShipmentDetails {...props} />} />
                        </Switch>
                    </Router>
                </Provider>
            </div>
        );
    }
}

export default AppComponent;
