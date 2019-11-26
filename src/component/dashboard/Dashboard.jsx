import React from 'react';
import Sidebar from './../sidebar/Sidebar.jsx';
import RightContent from './../rightContent/RightContent.jsx';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="Dashboard">
         <Sidebar />
         <RightContent />
      </div>
    );
  }
}

export default Dashboard;
