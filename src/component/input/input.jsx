import React from 'react';
import './input.css';

class Input extends React.Component {
  render() {
    return (
      <div className="inputField">
       <label> {this.props.inputLabel}</label>
       <input type={ this.props.inputType} name={ this.props.inputName }  placeholder={ this.props.inputPlaceholder } />
      </div>
    );
  }
}

export default Input;
