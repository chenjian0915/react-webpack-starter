import React from 'react'
import { Route } from 'react-router-dom';

import FormComponent from '../view/form/index.jsx';
import List from '../view/list/index.jsx';

export default () => [
    <Route path="/" exact component={List} key="home" />,
    <Route path="/list" component={List} key="list" />,
    <Route path="/form" component={FormComponent} key="form" />,
];
