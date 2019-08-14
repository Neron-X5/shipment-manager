import { ShipmentStore } from '../stores/shipments.store';

export interface IPaginationProps {
  currentPage: number;
  pageSize: number;
  totalRecords: number;
  onPageChanged: (paginationData: IPaginationData) => void;
  store: ShipmentStore;
}

export interface IPaginationState {
  currentPage: number;
  pageCount: number;
}

export interface IPaginationData {
  currentPage: number;
  totalPages: number;
  pageLimit: number;
  totalRecords: number;
}
