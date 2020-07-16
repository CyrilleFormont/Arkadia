import React , { useState }from 'react';
import logo from './logo.svg';
import {Redirect, BrowserRouter, HashRouter, Route} from 'react-router-dom';
import Routing from "./components/routing/routing";
import "./App.css";
import Home from "./screens/home/home";
import Settings from "./screens/settings/settings";
function App(props:any) {
  const [redirect, setRedirect] = useState(false);
  return (
      <>
            <Routing to="/home" />}
      </>);
}

export default App;
