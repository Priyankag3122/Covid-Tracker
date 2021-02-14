import React from "react";
import { Route, Switch } from "react-router-dom";
import Colleges from "../views/colleges";
import Contact from "../views/contact";
import Hospitals from "../views/hospitals";
import Notification from "../views/notification";
import Tested from "../views/tested";

const App = ({ match, history }) => {
  return (
    <div>
      {/* <HeaderApp /> */}
      <Switch>
        <Route
          path={`${match.url}/contact`}
          render={props => <Contact {...props} />}
        />
        <Route
          path={`${match.url}/colleges`}
          render={props => <Colleges {...props} />}
        />
        <Route
          path={`${match.url}/hospitals`}
          render={props => <Hospitals {...props} />}
        />
         <Route
          path={`${match.url}/notification`}
          render={props => <Notification {...props} />}
        />
          <Route
          path={`${match.url}/tested`}
          render={props => <Tested {...props} />}
        />

      </Switch>
    </div>
  );
};
export default App;