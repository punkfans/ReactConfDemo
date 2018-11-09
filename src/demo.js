import React from 'react';
import { TextField } from '@material-ui/core';
import './demo.css';

export default class demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'Yuyang',
            lastName: 'Wang',
        };

        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
    }

    componentDidMount() {
        document.title = `${this.state.firstName}'s Demo`;
    }

    componentDidUpdate() {
        document.title = `${this.state.firstName}'s Demo`;
    }

    handleFirstNameChange(e) {
        this.setState({
            firstName: e.target.value
        });
    }

    handleLastNameChange(e) {
        this.setState({
            lastName: e.target.value
        });
    }

    render() {
        return (
            <div className="demoContainer">
                <TextField
                    id="firstd-name"
                    label="FirstName"
                    value={this.state.firstName}
                    onChange={this.handleFirstNameChange}
                    margin="normal"
                />
                <TextField
                    id="last-name"
                    label="LastName"
                    value={this.state.lastName}
                    onChange={this.handleLastNameChange}
                    margin="normal"
                />
            </div>
        );
    }
}