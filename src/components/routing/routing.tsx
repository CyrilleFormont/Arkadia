import React , { useState }from 'react';
import logo from './logo.svg';
import {Redirect, HashRouter} from 'react-router-dom';

function Routing(props:any) {
    return (
        <HashRouter>
            <Redirect to={props.to} />}
        </HashRouter>
    );
}

export default Routing;