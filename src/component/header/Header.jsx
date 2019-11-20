import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

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
       <div className="headerMain">
          <h1> Logo</h1>
          <span className="date">{this.state.date}</span>
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
            <Switch>
              <Route path="/logout">
                <Logout />
              </Route>
            </Switch>
          </div>
        </Router>
       </div>
    );
  }
}

function Logout() {
  return <h2>Logout</h2>;
}

export default Header;
