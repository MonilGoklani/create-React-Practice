import {
  Switch,
  Route
} from "react-router-dom";

import App from './App'
import Test from './Test'

function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/test">
          <Test/>
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes
