import React, { useState } from 'react';
import { Switch } from '@material-ui/core';
import { useName as useResidentialAddress } from '../util/util';
import { TextField } from '@material-ui/core';
import './offScreenRender.css';
import MailingAddressComponent from './mailingAddressComponent';

export default function OffScreenRender() {
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
                    value="checked"
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