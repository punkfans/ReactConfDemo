import React, { lazy, Suspense, useState } from 'react';
import { Switch, CircularProgress } from '@material-ui/core';
import { useName } from '../util/util';
import { TextField } from '@material-ui/core';
import './backgroundLoading.css';

const MailingAddressComponent = lazy(() => {
    return new Promise(resolve => {
        setTimeout(resolve, 3000);
    }).then(() => import('./mailingAddressComponent'));
});

export default function BackgroundLoading() {
    const [toggleState, setToggleState] = useState(false);
    const [residentialAddress, handleResidentialAddress] = useName('');

    const renderMailingAddress = () => {
        if (!toggleState) {
            return null;
        } else {
            return (
                <Suspense fallback={<CircularProgress />}>
                    <MailingAddressComponent />
                </Suspense>
            );
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
            {renderMailingAddress()}
        </div>
    );
}