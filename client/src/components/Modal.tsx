import * as React from 'react';
import { IModalProps } from '../interfaces';

import '../styles/modal.scss';

const Modal = ({
  handleClose,
  show,
  children,
  handleSave,
  showSaveButton,
}: IModalProps) => {
  return (
    <div className={show ? 'modal display-block' : 'modal display-none'}>
      <section className="modal-main">
        {children}
        <div className="actions">
          {showSaveButton && <button onClick={handleSave}>Save</button>}
          <button onClick={handleClose}>Close</button>
        </div>
      </section>
    </div>
  );
};

export default Modal;
