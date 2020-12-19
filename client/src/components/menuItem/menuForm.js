import React, { Component } from 'react';

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
)

const validateForm = () => {
    let valid = true;
    object.values(errors).forEach(value => value.length > 0 && (value = false));
    return valid
}
export default class MenuForm extends Component () {
    constructor (props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            errors: {
                username: '',
                email: '',
                password: ''
            }
        }
    }

    render () {
        return (
            <div>
                <input type="text" placeholder="Username" value={this.state.username} />
                <input type="email" placeholder="Email" value={this.state.email} />
                <input type="text" placeholder="Password" value={this.state.password} />
                <submit>Submit</submit>
            </div>
        );
    }
} 