import { observer } from 'mobx-react';
import * as React from 'react';
import Pagination from '../components/Pagination';
import Select from '../components/Select';
import ShipmentCard from '../components/ShipmentCard';
import { LIMIT, TOTAL_ITEMS } from '../constants';
import {
  IPaginationData,
  IShipmentsProps,
  IShipmentState,
} from '../interfaces';
import '../styles/shipments.scss';

@observer
class Shipments extends React.Component<IShipmentsProps, IShipmentState> {
  constructor(props: IShipmentsProps) {
    super(props);
    this.state = {
      currentPage: 1,
    };
  }
  onPageChanged = (paginationData: IPaginationData) => {
    this.setState({ currentPage: paginationData.currentPage }, () =>
      this.props.store.getShipments(paginationData.currentPage),
    );
  };

  handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const query = evt.target.value;
    this.props.store.searchShipments(query);
  };

  showPagination = () => {
    if (this.props.store.searchQuery) {
      return false;
    }
    return true;
  };

  renderShipments = () => {
    if (
      this.props.store.searchQuery &&
      !this.props.store.filteredShipments.length
    ) {
      return <p>No results found</p>;
    }

    if (this.props.store.searchQuery) {
      return (
        <div className="shipments-container">
          {this.props.store.filteredShipments.map(shipment => {
            return (
              <ShipmentCard
                key={shipment.id}
                id={shipment.id}
                name={shipment.name}
                cargoLength={shipment.cargo.length}
                total={shipment.total}
                origin={shipment.origin}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="shipments-container">
        {this.props.store.shipments.map(shipment => {
          return (
            <ShipmentCard
              key={shipment.id}
              id={shipment.id}
              name={shipment.name}
              cargoLength={shipment.cargo.length}
              total={shipment.total}
              origin={shipment.origin}
            />
          );
        })}
      </div>
    );
  };

  render() {
    const { store } = this.props;
    if (store.isLoading) {
      return <h1>Loading...</h1>;
    }

    return (
      <React.Fragment>
        <h1 className="heading">FreightHub shipments</h1>
        <div className="controls-container">
          <p>Total Items: {TOTAL_ITEMS}</p>
          <Select store={this.props.store} />
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Search by id"
            onChange={this.handleChange}
          />
        </div>
        {this.renderShipments()}
        {
          <Pagination
            totalRecords={TOTAL_ITEMS}
            pageSize={LIMIT}
            onPageChanged={this.onPageChanged}
            currentPage={this.state.currentPage}
            store={this.props.store}
          />
        }
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.props.store.getShipments();
  }
}

export default Shipments;
