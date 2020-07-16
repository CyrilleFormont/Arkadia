import React, {useState} from 'react';
import "./settings.css";
import Routing from "../../components/routing/routing";

function Settings() {
    const [redirect, setRedirect] = useState(false);

    return (
        <div className="App">
            <header className="App-header">
                <p>
                  Settingsabc
                </p>
                <button onClick={()=> setRedirect(true)}>
                    Click to be redirected
                </button>
                {redirect && <Routing to={"/home"}/>}
            </header>
        </div>
    );
}

export default Settings;