import React, { useState } from 'react';
import { Switch } from '@material-ui/core';
import HooksFunctionComponent from './hooksFunctionComponent';
import HooksClassComponent from './hooksClassComponent';

export default function Hook() {
    const [isUsingHook, setIsUsingHook] = useState(false);
    const renderDemo = () => {
        if (isUsingHook) {
            return <HooksFunctionComponent />
        }

        return <HooksClassComponent />
    };

    const hooksIndecator = isUsingHook ? 'Hooks on' : 'Hooks off';

    const swtichHooksDemo = () => {
        setIsUsingHook(!isUsingHook);
    };

    return (
        <div>
            {renderDemo()}
            <Switch
                checked={isUsingHook}
                onChange={swtichHooksDemo}
                value="checkedB"
                color="primary"
            />
            <span>{ hooksIndecator }</span>
        </div>
    );
}