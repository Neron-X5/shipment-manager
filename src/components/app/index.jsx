import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ReduxStore from '../../reducers/store';

import ListContainer from '../listing-page';
import Details from '../details-page';

import './style.scss';

class AppComponent extends Component {
    render() {
        return (
            <div className="app-container">
                <header className="header">Shipment Manager</header>
                <Provider store={ReduxStore}>
                    <Router>
                        <Switch>
                            <Route exact={true} path="/" render={props => <ListContainer {...props} />} />
                            <Route exact={true} path="/:shipmentId" render={props => <Details {...props} />} />
                        </Switch>
                    </Router>
                </Provider>
            </div>
        );
    }
}

export default AppComponent;
