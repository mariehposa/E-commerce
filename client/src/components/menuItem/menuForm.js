import React, { Component } from 'react';

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
)

const checkFormErrors = () => {
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

    handleValidation (event) {
        event.preventDefault();
        const { name, value } = event.target
        let errors = this.state.errors

        switch (name) {
            case 'username':
                value.length < 3 ? 'username must be at least 3 characters long' : '';
                break;
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