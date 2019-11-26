import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
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
            <Route path="/logout">
              <Logout dateProp={this.state.date} />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
         </Router>
       </div>


    );
  }
}

class Logout extends React.Component {
  render() {
    return (
      <div>
        <div className="headerMain">
          <img width="60" height="60" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" />
          <span className="date">{this.props.dateProp}</span>
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/logout">Logout</Link>
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
  return (
     <Content />
  );
}

export default Header;
