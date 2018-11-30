import React, { useState, useEffect } from 'react';
import { TextField, CircularProgress } from '@material-ui/core';
import { useName as useMailingAddress } from '../util/util';

export default function mailingAddressComponent() {
    const [mailingAddress, handleMailingAddressChange] = useMailingAddress('');
    const [data, setData] = useState('');
    const fetchData = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve("data");
            }, 2000);
        });
    };

    useEffect(() => {
        if(!data) {
            fetchData().then((d) => {
                setData(d);
            });
        }
    });
    
    if(!data) {
        return <CircularProgress />
    }

    return (
        <TextField
            id="mailingAddress"
            label="Mailing Address"
            value={mailingAddress}
            onChange={handleMailingAddressChange}
            margin="normal"
        />
    );
}