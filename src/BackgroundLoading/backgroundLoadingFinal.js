import React, { lazy, Suspense, useState } from 'react';
import { Switch, CircularProgress } from '@material-ui/core';
import { useName } from '../Hooks/hooksFunctionComponent';
import { TextField } from '@material-ui/core';
import './backgroundLoading.css';

const SomgBigComponent = lazy(() => {
    return new Promise(resolve => {
        setTimeout(resolve, 5000);
    }).then(() => import('./somgBigComponent'));
});

export default function BackgroundLoading() {
    const [toggleState, setToggleState] = useState(false);
    const [inputValue, handleInputValue] = useName('Some Text');

    const renderBody = () => {
        if (!toggleState) {
            return null;
        } else {
            return (
                <Suspense fallback={<CircularProgress />}>
                    <SomgBigComponent />
                </Suspense>
            );
        }
    }

    return (
        <div className="container">
            <TextField
                id="inputField"
                label="Random Text Field"
                value={inputValue}
                onChange={handleInputValue}
                margin="normal"
            />
            <Switch
                checked={toggleState}
                onChange={() => setToggleState(!toggleState)}
                value="checkedB"
                color="primary"
            />
            <div hidden={!toggleState}>
                <Suspense fallback={<CircularProgress />}>
                    <SomgBigComponent />
                </Suspense>
            </div>
        </div>
    );
}