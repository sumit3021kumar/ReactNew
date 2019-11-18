import React from 'react';
import './menu.css';

class Menu extends React.Component {
  render() {
    return (
      <div className="main-menu">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </div>
    );
  }
}

export default Menu;
