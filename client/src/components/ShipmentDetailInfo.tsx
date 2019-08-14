import * as React from 'react';
import { IShipmentDetailInfoProps } from '../interfaces';

import '../styles/shipment-detail-info.scss';

const ShipmentDetailInfo = (props: IShipmentDetailInfoProps) => {
  return (
    <div className="shipment-detail-info-container">
      <p className="shipment-detail-info-container__name">{props.name}</p>
      <p className="shipment-detail-info-container__value">{props.value}</p>
    </div>
  );
};

export default ShipmentDetailInfo;
