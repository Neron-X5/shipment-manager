import { ShipmentDetailsStore } from '../stores/shipment-details.store';
import { ShipmentStore } from '../stores/shipments.store';
import { ICargo } from './cargo.interface';
import { IService } from './services.interface';

export interface IShipment {
  id: string;
  name: string;
  cargo: ICargo[];
  mode: string;
  type: string;
  destination: string;
  origin: string;
  services: IService[];
  total: number;
  status: string;
  userId: string;
}

export interface IShipmentsProps {
  store: ShipmentStore;
}

export interface IShipmentState {
  currentPage: number;
}

export interface IShipmentDetailInfoProps {
  name: string;
  value?: string;
}

export interface IShipmentDetailsProps {
  store: ShipmentDetailsStore;
  match: {
    isExact: boolean;
    params: {
      shipmentId: string;
    };
    path: string;
    url: string;
  };
}

export interface IShipmentDetailsState {
  isShowing: boolean;
  shipmentName: string;
}
