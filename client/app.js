import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import App from './AppView';

import appState from './store/app-state';

const root = document.getElementById('root');

const render = (App) => {
    ReactDOM.render(
        <Provider appState={appState} >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
	    ,root);
};

render(App);


if(module.hot){
    module.hot.accept('./AppView.jsx',() =>{
        const HotApp = require('./AppView.jsx').default;
        render(HotApp);
    })
}
