import * as React from 'react';

import { ISelectProps } from '../interfaces';
import '../styles/select.scss';

class Select extends React.Component<ISelectProps, {}> {
  onChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    this.props.store.sortShipments(evt.target.value);
  };

  render() {
    return (
      <div className="select-container">
        <p>Sort by: </p>
        <select onChange={this.onChange} defaultValue="name">
          <option value="name">name</option>
          <option value="id">id</option>
          <option value="total">total</option>
        </select>
      </div>
    );
  }
}

export default Select;
