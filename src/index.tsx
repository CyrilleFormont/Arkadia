import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import Home from "./screens/home/home";
import {
    HashRouter,
    Route
} from "react-router-dom";
import Settings from "./screens/settings/settings";
import App from "./App";
ReactDOM.render(
  <React.StrictMode>
      <HashRouter>
              <Route path="/home" exact     component={ Home } />
              <Route path="/settings" exact     component={ Settings } />
              <App/>
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
