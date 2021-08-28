import React from "react";
import { Provider } from "react-redux";
import store from "./_redux/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import Users from "./components/Users";

export default function app() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Form1} />
          <Route path="/step2" component={Form2} />
          <Route path="/step3" component={Form3} />
          <Route path="/users" component={Users} />
        </Switch>
      </Router>
    </Provider>
  );
}
