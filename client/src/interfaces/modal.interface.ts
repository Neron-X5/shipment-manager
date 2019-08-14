export interface IModalProps {
  handleClose: () => void;
  show: boolean;
  children: React.ReactElement[];
  handleSave: () => void;
  showSaveButton: boolean;
}
