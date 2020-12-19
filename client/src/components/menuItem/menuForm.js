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
        const { errors } = this.state.errors;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" name="username" placeholder="Username" onChange={this.handleValidation} />
                    { errors.username.length > 0 && <p>{errors.username}</p> }
                </div>
                <div>
                    <input type="email"  name="email" placeholder="Email" onChange={this.handleValidation} />
                    { errors.email.length > 0 && <p>{errors.email}</p> }
                </div>
                <div>
                    <input type="text" name="password" placeholder="Password" onChange={this.handleValidation} />
                    { errors.password.length > 0 && <p>{errors.password}</p> }
                </div>
                <div>
                    <submit type="submit">Submit</submit>
                </div>
            </form>
        );
    }
} 