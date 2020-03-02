import React from 'react'
import { CssBaseline, Container, Typography } from '@material-ui/core'

export const AppContainer = ({ children}: any) => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
                    {children}
                </Typography>
            </Container>
        </React.Fragment>
    )
}
