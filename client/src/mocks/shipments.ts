import { IShipment } from '../interfaces';

export const shipments: IShipment[] = [
  {
    id: 'S1000',
    name: 'T-shirts from Shanghai to Hamburg',
    cargo: [
      {
        type: 'Fabric',
        description: '1000 Blue T-shirts',
        volume: '2',
      },
      {
        type: 'Fabric',
        description: '2000 Green T-shirts',
        volume: '3',
      },
    ],
    mode: 'sea',
    type: 'FCL',
    destination: 'Saarbrücker Str. 38, 10405 Berlin',
    origin: 'Shanghai Port',
    services: [
      {
        type: 'customs',
      },
    ],
    total: 1000,
    status: 'ACTIVE',
    userId: 'U1000',
  },
  {
    id: 'S1001',
    name: 'New spring collection',
    cargo: [
      {
        type: 'Furniture',
        description: '300 Tables',
        volume: '20',
      },
      {
        type: 'Furniture',
        description: '1500 Chairs',
        volume: '15',
      },
    ],
    mode: 'sea',
    type: 'FCL',
    destination: 'Saarbrücker Str. 38, 10405 Berlin',
    origin: 'Ningbo port',
    services: [
      {
        type: 'customs',
      },
      {
        type: 'insurance',
        value: '100',
      },
    ],
    total: 3000,
    status: 'ACTIVE',
    userId: 'U1002',
  },
];
