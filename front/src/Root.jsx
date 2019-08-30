import "./global/fonts.scss";
import "./global/stylesheets.scss";
import "./global/javascripts";

import React from "react";
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={MainPage} />
    </Router>
  </Provider>
);

export default Root;
