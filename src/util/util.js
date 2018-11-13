import { useState } from 'react';

export const useName = (initValue) => {
    const [name, setName] = useState(initValue);
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    return [name, handleNameChange];
};