import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './AppView';

const root = document.getElementById('root');

const render = (App) => {
    ReactDOM.render(
	    <BrowserRouter>
	        <App />
	    </BrowserRouter>
	    ,root);
};

render(App);


if(module.hot){
    module.hot.accept('./AppView.jsx',() =>{
        const HotApp = require('./AppView.jsx').default;
        render(HotApp);
    })
}
