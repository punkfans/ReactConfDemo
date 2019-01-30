import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import './demo.css';

export default function HooksFunctionComponent() {

    const [firstName, onFirstNameChange] = useName('Yuyang');
    const [lastName, onLastNameChange] = useName('Wang');
    const windowWidth = useWindowResize();

    useEffect(() => {
        document.title = `${firstName}'s Demo`;
    });

    return (
        <div className="inputsContainer isUsinghooks">
            <TextField
                id="first-name"
                label="First Name"
                value={firstName}
                margin="normal"
                onChange={onFirstNameChange}
            />
            <TextField
                id="last-name"
                label="Last Name"
                value={lastName}
                margin="normal"
                onChange={onLastNameChange}
            />
            <TextField
                id="window-width"
                label="Window Width"
                value={windowWidth}
                margin="normal"
            />
        </div>
    );
}

export const useName = (initValue) => {
    const [name, setName] = useState(initValue);
    const onNameChange = (e) => {
        setName(e.target.value);
    };

    return [name, onNameChange];
};

export const useWindowResize = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowWidthChange = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowWidthChange);

        return (() => {
            window.removeEventListener('resize', handleWindowWidthChange);
        });
    });

    return windowWidth;
};