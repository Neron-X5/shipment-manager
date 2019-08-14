import * as React from 'react';
import { Link } from 'react-router-dom';

import { IShipmentCardProps } from '../interfaces';
import '../styles/shipmentCard.scss';

class ShipmentCard extends React.Component<IShipmentCardProps, {}> {
  getShipmentName = (shipmentName: string) => {
    if (shipmentName.length < 18) {
      return shipmentName;
    }
    return `${shipmentName.slice(0, 18)}...`;
  };

  render() {
    return (
      <div className="shipment-card-container">
        <div className="shipment-card-content">
          <h3
            className="shipment-card-content__shipment-name"
            title={this.props.name}
          >
            {this.getShipmentName(this.props.name)}
          </h3>
          <p className="shipment-card-content__shipment-origin">
            {this.props.origin}
          </p>
          <p className="shipment-card-content__shipment-info">
            Shipment id:{' '}
            <span className="shipment-card-content__shipment-info-value">
              {this.props.id}
            </span>
          </p>
          <p className="shipment-card-content__shipment-info">
            Number of cargo items:{' '}
            <span className="shipment-card-content__shipment-info-value">
              {this.props.cargoLength}
            </span>
          </p>
          <p className="shipment-card-content__shipment-info">
            Total:{' '}
            <span className="shipment-card-content__shipment-info-value">
              {this.props.total}
            </span>
          </p>
          <Link to={`/shipments/${this.props.id}`}>View shipment</Link>
        </div>
      </div>
    );
  }
}

export default ShipmentCard;
