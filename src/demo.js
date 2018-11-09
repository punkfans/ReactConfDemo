import React from 'react';

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
            <div>
                <div>
                    First Name
                    <input value={this.state.firstName} onChange={this.handleFirstNameChange}/>
                </div>
                <div>
                    Last Name
                    <input value={this.state.lastName} onChange={this.handleLastNameChange}/>
                </div>
            </div>
        );
    }
}