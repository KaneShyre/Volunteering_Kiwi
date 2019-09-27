import React from "react";
import { Switch } from "react-router-dom";
import routes from "../router/routes";

function App() {
  return (
    <div className="App">
      <Switch>
        {routes}
      </Switch>
    </div>
  );
}

export default App;
