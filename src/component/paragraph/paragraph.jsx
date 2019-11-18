import React from 'react';
import './paragraph.css';

class Paragraph extends React.Component {
  render() {
    return (
      <div className="paragraph">
        <p>{this.props.paragraph}</p>
      </div>
    );
  }
}

export default Paragraph;
