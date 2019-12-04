import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Content from '../content/Content.jsx';
import Dashboard from '../dashboard/Dashboard.jsx';

import './header.css';

class Header extends React.Component {

  constructor() {
       super();
       const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
       var today = new Date(),
           date =  monthNames[today.getMonth()] + " " + today.getDate() + ' ' + today.getFullYear();
       this.state = {
           date: date
       };
   }
  render() {
    return (
       <div>
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/logout" >
              <Logout dateProp={this.state.date} />
            </Route>
            <Route path='/'>
              <Login />
            </Route>
          </Switch>
         </Router>
       </div>


    );
  }
}

class Logout extends React.Component {
  constructor(props) {
    super(props);
    let loginArray = JSON.parse(localStorage.getItem('LoginDetail'));
    let token;
    let title = 'login';
    for (var prop in loginArray) {
      token = loginArray['token'];
    }
    if(token) {
      title = 'logout'
    }
    this.state = {
      button: '',
      userText: title
    }
    this.logout = this.logout.bind(this);
  }

  logout(e) {
    localStorage.setItem('LoginDetail', JSON.stringify({'token': false}));
  }

  render() {
    return (
      <div>
        <div className="headerMain">
          <a href="/login"><img alt="logo" width="60" height="60" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" /></a>
          <span className="date">{this.props.dateProp}</span>
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <a href="/login" onClick={this.logout}>{this.state.userText}</a>
                  </li>
                </ul>
              </nav>
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
          </div>
         </Router>
       </div>
       <Dashboard />
      </div>
    );
  }
}
function Login() {
  let loginArray = JSON.parse(localStorage.getItem('LoginDetail'));
  let token;
  let login;
  for (var prop in loginArray) {
    token = loginArray['token'];
  }
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
   ];
  var today = new Date(),
      date =  monthNames[today.getMonth()] + " " + today.getDate() + ' ' + today.getFullYear();
  if(token == false) {
    login = <Content />;
  } else {
    login = <Logout dateProp={date}/>;
  }

  return  login;
}

export default Header;
