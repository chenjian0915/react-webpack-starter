import React from 'react';
import axios from 'axios';

export default class TestApi extends React.Component{

    getTopics(){
        axios.get('/api/topics').then(resp => {
            console.log(resp)
        }).catch(err => {
            console.log(err)
        })
    }

    login (){
        axios.post('/api/user/login',{
            accessToken : '50633757-e7d7-4265-b6ac-5736785e330a'
        }).then(resp => {
            console.log(resp)
        }).catch(err => {
            console.log(err)
        })
    }

    markAll(){
        axios.post('/api/message/mark_all?needAccessToken=true').then(resp => {
            console.log(resp)
        }).catch(err => {
            console.log(err)
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.getTopics}>topics</button>
                <button onClick={this.login}>login</button>
                <button onClick={this.markAll}>markAll</button>
            </div>
        )
    }
}