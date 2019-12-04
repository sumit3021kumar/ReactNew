import React from 'react';
import Sidebar from './../sidebar/Sidebar.jsx';
import RightContent from './../rightContent/RightContent.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: '',
      RightContent : ''
    }
  }

  componentDidMount() {
    let loginArray = JSON.parse(localStorage.getItem('LoginDetail'));
    let token;
    for (var prop in loginArray) {
      token = loginArray['token'];
    }
    if(token) {
      this.setState({
        sidebar: <Sidebar />,
        RightContent: <RightContent />
      });
    } else {
      this.setState({
        sidebar: "Please Login first then you able to Add projects . For login click on login button on the top bar or logo"
      });
    }
  }
  render() {
    return (
      <div className="Dashboard">
         { this.state.sidebar }
         { this.state.RightContent }
      </div>
    );
  }
}

export default Dashboard;
