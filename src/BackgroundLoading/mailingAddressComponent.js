import React from 'react';
import { TextField } from '@material-ui/core';
import { useName } from '../util/util';

export default function mailingAddressComponent() {
    const [mailingAddress, handleMailingAddressChange] = useName('');

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