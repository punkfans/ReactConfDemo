import React from 'react';
import { TextField } from '@material-ui/core';
import './demo.css';

export default class HooksClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'Hooks',
            lastName: 'Wang',
            windowWidth: window.innerWidth,
        };

        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        document.title = `${this.state.firstName}'s Demo`;
        window.addEventListener('resize', this.handleResize);
    }

    componentDidUpdate() {
        document.title = `${this.state.firstName}'s Demo`;
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
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

    handleResize() {
        this.setState({
            windowWidth: window.innerWidth,
        });
    }

    render() {
        return (
            <div className="inputsContainer isUsinghooks">
                <TextField
                    id="first-name"
                    label="First Name"
                    value={this.state.firstName}
                    onChange={this.handleFirstNameChange}
                    margin="normal"
                />
                <TextField
                    id="last-name"
                    label="Last Name"
                    value={this.state.lastName}
                    onChange={this.handleLastNameChange}
                    margin="normal"
                />
                <TextField
                    id="windowWidth"
                    label="Window Width"
                    value={this.state.windowWidth}
                    margin="normal"
                />
            </div>
        );
    }
}