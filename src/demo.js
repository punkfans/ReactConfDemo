import React from 'react';
import { TextField } from '@material-ui/core';
import './demo.css';

export default class demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'Yuyang',
            lastName: 'Wang',
            windowWidth: window.innerWidth,
        };

        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
    }

    componentDidMount() {
        document.title = `${this.state.firstName}'s Demo`;
        window.addEventListener('resize', () => {
            this.setState({
                windowWidth: window.innerWidth,
            });
        });
    }

    componentDidUpdate() {
        document.title = `${this.state.firstName}'s Demo`;
    }

    componentWillUnmount() {
        window.removeEventListener('resize');
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
                    id="first-name"
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
                <TextField
                    id="windowWidth"
                    label="WindowWidth"
                    value={this.state.windowWidth}
                    margin="normal"
                />
            </div>
        );
    }
}