import React from 'react';
import {
    observer,
    inject
} from 'mobx-react';
import PropTypes from 'prop-types';
import AppState from '../../store/app-state'

@inject('appState') @observer

export default class FormComponent extends React.Component {
    constructor(){
        super()
        this.changeName = this.changeName.bind(this)
    }

    changeName(event) {
        this.props.appState.changeName(event.target.value);
    }

    render(){
        return (<div>
            <input type="text" onChange={this.changeName}/>
            <span>{this.props.appState.msg}</span>
        </div>)
    }
}

FormComponent.propTypes = {
    appState : PropTypes.instanceOf(AppState).isRequired   //去掉isRequired可以去掉warning  Failed prop type: The prop `appState` is marked as required in `inject-FormComponent-with-appState`, but its value is `undefined`.
}
