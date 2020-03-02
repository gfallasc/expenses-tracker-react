import React from 'react'
import { Typography } from '@material-ui/core'

export const Balance = () => {
    const balanceStr = '$ 0.00';
    return (
        <div>
            <Typography variant="h5" gutterBottom>
                Your Balance
            </Typography>
            <Typography variant="h6" gutterBottom>
                {balanceStr}
            </Typography>
        </div>
    )
}
