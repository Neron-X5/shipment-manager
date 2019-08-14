import { uniqueId } from 'lodash';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';
import ShipmentDetailInfo from '../components/ShipmentDetailInfo';
import { IShipmentDetailsProps, IShipmentDetailsState } from '../interfaces';

import '../styles/shipment-detail.scss';

@observer
class ShipmentDetails extends React.Component<
  IShipmentDetailsProps,
  IShipmentDetailsState
> {
  constructor(props: IShipmentDetailsProps) {
    super(props);
    this.state = {
      isShowing: false,
      shipmentName: '',
    };
  }

  componentDidMount() {
    const shipmentId = this.props.match.params.shipmentId;
    this.props.store.getShipmentDetails(shipmentId);
  }

  handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      shipmentName: evt.target.value,
    });
  };

  handleSave = () => {
    const shipmentId = this.props.match.params.shipmentId;
    this.props.store.updateshipmentName(this.state.shipmentName, shipmentId);
    this.setState({
      isShowing: false,
      shipmentName: '',
    });
  };

  openModalHandler = () => {
    this.setState({
      isShowing: true,
    });
  };

  closeModalHandler = () => {
    this.setState({
      isShowing: false,
    });
  };

  render() {
    const [shipment] = this.props.store.shipment;
    if (this.props.store.isLoading) {
      return <h1>Loading...</h1>;
    }

    return (
      <React.Fragment>
        <h2>
          {this.props.store.shipmentName}{' '}
          <span onClick={this.openModalHandler}>
            <i className="fa fa-edit" />
          </span>
        </h2>
        <Modal
          show={this.state.isShowing}
          handleClose={this.closeModalHandler}
          handleSave={this.handleSave}
          showSaveButton={Boolean(this.state.shipmentName)}
        >
          <h3>Shipment name: {this.props.store.shipmentName}</h3>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.shipmentName}
            onChange={this.handleChange}
            placeholder="Enter new shipment name"
          />
        </Modal>
        <ShipmentDetailInfo name="Shipment id" value={shipment.id} />
        <ShipmentDetailInfo name="Mode of transport" value={shipment.mode} />
        <ShipmentDetailInfo name="Type of shipment" value={shipment.type} />
        <ShipmentDetailInfo
          name="Shipment destination"
          value={shipment.destination}
        />
        <ShipmentDetailInfo name="Shipment origin" value={shipment.origin} />
        <ShipmentDetailInfo name="Status" value={shipment.status} />
        <ShipmentDetailInfo name="User ID" value={shipment.userId} />
        <p className="shipment-info-name">Cargo</p>
        {shipment.cargo.map(el => {
          return (
            <ul key={uniqueId()}>
              <li>{el.type}</li>
              <li>{el.description}</li>
              <li>
                Volume: {el.volume}m<sup>3</sup>
              </li>
            </ul>
          );
        })}
        <p className="shipment-info-name">Services</p>
        {shipment.services.map(el => {
          return (
            <ul key={uniqueId()}>
              <li>Type: {el.type}</li>
              {el.value && <li>Value: {el.value}</li>}
            </ul>
          );
        })}
        <Link to="/">Go home</Link>
      </React.Fragment>
    );
  }
}

export default ShipmentDetails;
