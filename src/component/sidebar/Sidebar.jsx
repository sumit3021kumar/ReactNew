import React from 'react';
import AddProject from './../addproject/AddProject.jsx';
import Project from './../project/Project.jsx';
import './sidebar.css';


class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <AddProject />
        <Project />
      </div>
    );
  }
}

export default Sidebar;
