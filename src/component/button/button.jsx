import React from 'react';
import './button.css';

class Button extends React.Component {
  render() {
    return (
      <div className="button-wrap">
        <a href={ this.props.buttonHref } className="button button-blue">{this.props.buttonText}</a>
      </div>
    );
  }
}

export default Button;
