import React , { useState }from 'react';
import logo from './logo.svg';
import './App.css';
import {Redirect, BrowserRouter, HashRouter} from 'react-router-dom';

function App(props:any) {
  const [redirect, setRedirect] = useState(false);

  const abc=()=>{
      setRedirect(true);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <HashRouter>
            {redirect && <Redirect to="/home" />}
        </HashRouter>
        <button onClick={abc}>
          Activer les lasers
        </button>
      </header>
    </div>
  );
}

export default App;
