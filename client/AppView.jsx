import React from 'react';
import Routes from './router/router.jsx';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

export default class App extends React.Component {
    render(){
        return [<ul><li><Button><Link to="/">首页</Link></Button></li>
            <li><Link to="/list">关于</Link></li>
            <li><Link to="/form">主题列表</Link></li></ul>,Routes()]

    }
}

