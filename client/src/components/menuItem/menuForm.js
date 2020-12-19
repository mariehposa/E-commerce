import React, { Component } from 'react';

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
)

const validPasswordRegex = RegExp(
    /^[a-zA-Z0-9]*$/i
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
                errors.username = value.length < 3 ? 'username must be at least 3 characters long' : '';
                break;

            case 'email':
                errors.email = validEmailRegex.test(value) ? '' : 'Invalid email';
                break;

            case 'password':
                errors.password = validPasswordRegex.test(value) && value.length > 8 ? '' : 'Password must be at least 8 characters and alpahumeric';
                break;
            
            default:
                break;
        }

        this.setState({errors, [name]: value})
    }

    handleSubmit (event) {
        event.preventDefault()
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="username" placeholder="Username" />
                <input type="email"  name="email" placeholder="Email"  />
                <input type="text" name="password" placeholder="Password"  />
                <submit type="submit">Submit</submit>
            </form>
        );
    }
} 