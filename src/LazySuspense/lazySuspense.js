import React, { lazy, Suspense } from 'react';
import { CircularProgress } from '@material-ui/core';

export default function LazySuspense() {
    return (
        <div>
            This is a very big component!
        </div>
    );
}