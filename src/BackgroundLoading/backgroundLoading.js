import React, { lazy, Suspense, useState } from 'react';
import { Switch, CircularProgress } from '@material-ui/core';

const SomgBigComponent = lazy(() => {
    return new Promise(resolve => {
        setTimeout(resolve, 2000);
    }).then(() => import('./somgBigComponent'));
});

export default function BackgroundLoading() {
    const [toggleState, setToggleState] = useState(false);

    const renderBody = () => {
        if(!toggleState) {
            return null;
        }else {
            return (
                <Suspense fallback={<CircularProgress />}>
                    <SomgBigComponent />
                </Suspense>
            );
        }
    }

    return (
        <div>
            { renderBody() }
            <Switch
                checked={toggleState}
                onChange={() => setToggleState(!toggleState)}
                value="checkedB"
                color="primary"
            />
        </div>
    );
}