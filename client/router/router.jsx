import React from 'react'
import { Route } from 'react-router-dom';

import FormComponent from '../view/form/index.jsx';
import List from '../view/list/index.jsx';

export default () => [
    <Route path="/" exact component={List} />,
    <Route path="/list" component={List} />,
    <Route path="/form" component={FormComponent} />,
];
