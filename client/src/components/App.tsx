import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ShipmentDetails from '../components/ShipmentDetails';
import Shipments from '../components/Shipments';
import { shipmentDetailsStore } from '../stores/shipment-details.store';
import { shipmentStore } from '../stores/shipments.store';

import '../styles/app.scss';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="app-container">
        <Router>
          <Switch>
            <Route
              exact={true}
              path="/"
              render={props => {
                return <Shipments {...props} store={shipmentStore} />;
              }}
            />
            <Route
              exact={true}
              path="/shipments/:shipmentId"
              render={props => {
                return (
                  <ShipmentDetails {...props} store={shipmentDetailsStore} />
                );
              }}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
