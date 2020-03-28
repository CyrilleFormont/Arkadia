import React, {useState} from 'react';
import './home.css';
import Routing from "../../components/routing/routing";

function Home() {
    const [redirect, setRedirect] = useState(false);

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Hello <code>src/App.tsx</code> and save to reload.
                </p>
                <button onClick={()=> setRedirect(true)}>
                    Click to be redirected
                </button>
                {redirect && <Routing to={"/settings"}/>}
            </header>
        </div>
    );
}

export default Home;