import React from 'react'
import { Route } from 'react-router-dom';

import FormComponent from '../view/form/index.jsx';
import List from '../view/list/index.jsx';
import TestApi from '../view/api-test/api-test.jsx';

export default () => [
    <Route path="/" exact component={List} key="home" />,
    <Route path="/list" component={List} key="list" />,
    <Route path="/form" component={FormComponent} key="form" />,
    <Route path="/apitest" component={TestApi} key="apitest" />,
];
