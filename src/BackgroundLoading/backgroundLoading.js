import React, { useState } from 'react';
import { Switch } from '@material-ui/core';
import { useName as useResidentialAddress } from '../util/util';
import { TextField } from '@material-ui/core';
import './backgroundLoading.css';
import MailingAddressComponent from './mailingAddressComponent';

export default function BackgroundLoading() {
    const [toggleState, setToggleState] = useState(false);
    const [residentialAddress, handleResidentialAddress] = useResidentialAddress('');

    const renderMailingAddress = () => {
        if (!toggleState) {
            return null;
        } else {
            return <MailingAddressComponent />;
        }
    }

    return (
        <div className="container">
            <TextField
                id="residentialAddress"
                label="Residential Address"
                value={residentialAddress}
                onChange={handleResidentialAddress}
                margin="normal"
            />
            <div>
                <Switch
                    checked={toggleState}
                    onChange={() => setToggleState(!toggleState)}
                    value="checkedB"
                    color="primary"
                />
                <span>
                    My mailing addrss is different from my residential address
                </span>
            </div>
            <div className="mailingAddressContainer">
                <div>
                    {renderMailingAddress()}
                </div>
            </div>
        </div>
    );
}