import React, { Component } from 'react';

class MenuForm extends Component () {
    constructor (props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    render () {
        return (
            <div>
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Password" />
                <submit>Submit</submit>
            </div>
        );
    }
} 