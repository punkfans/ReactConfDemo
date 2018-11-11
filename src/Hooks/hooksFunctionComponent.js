import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import './demo.css';

export default function HooksFunctionComponent() {
    const [firstName, handleFirstNameChange] = useName('Haha');
    const [lastName, handleLastNameChange] = useName('Wang');

    // document title
    useEffect(() => {
        document.title = `${firstName}'s Demo`;
    });

    const windowWidth = useWindowResize();

    return (
        <div className="inputsContainer isUsinghooks">
            <TextField
                id="first-name"
                label="First Name"
                value={firstName}
                onChange={handleFirstNameChange}
                margin="normal"
            />
            <TextField
                id="last-name"
                label="Last Name"
                value={lastName}
                onChange={handleLastNameChange}
                margin="normal"
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

export const useWindowResize = () => {
    // window resize
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

export const useName = (initValue) => {
    const [name, setName] = useState(initValue);
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    return [name, handleNameChange];
};