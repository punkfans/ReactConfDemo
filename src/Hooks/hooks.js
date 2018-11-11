import React, { useState } from 'react';
import { Switch } from '@material-ui/core';
import DemoWithHooks from './demoWithHooks';
import Demo from './demo';

export default function Hook() {
    const [isUsingHook, setIsUsingHook] = useState(false);
    const renderDemo = () => {
        if (isUsingHook) {
            return <DemoWithHooks />
        }

        return <Demo />
    };

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
        </div>
    );
}