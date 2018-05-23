import React from 'react';
import Routes from './router/router.jsx';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

export default class App extends React.Component {
    render(){
        return [<div key="nav"><Button><Link to="/">首页</Link></Button><Button><Link to="/list">关于</Link></Button>
            <Button><Link to="/form">主题列表</Link></Button></div>,<Routes key="Router" />]

    }
}

