import React, { Component } from 'react';

class MenuForm extends Component () {
    render () {
        return (
            <div>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="Password" />
                <submit>Submit</submit>
            </div>
        );
    }
} 