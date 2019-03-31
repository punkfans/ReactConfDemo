import React from 'react';
import { TextField } from '@material-ui/core';
import './demo.css';

export default function HooksFunctionComponent() {
    return (
        <div className="inputsContainer">
            <TextField
                id="first-name"
                label="First Name"
                value={""}
                margin="normal"
            />
            <TextField
                id="last-name"
                label="Last Name"
                value={""}
                margin="normal"
            />
            <TextField
                id="window-width"
                label="Window Width"
                value={""}
                margin="normal"
            />
        </div>
    );
}