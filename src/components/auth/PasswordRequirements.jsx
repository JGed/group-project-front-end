import React from 'react';
import { hasCapital, hasNumber } from './Register';
import { Box, Typography, Alert } from '@material-ui/core';
const PasswordRequirements = ({ password }) => {
    return (
        <Box
            sx={{
                backgroundColor: 'info.main',
                padding: 1,
                m: 1,
            }}
        >
            <Typography color="neutral.light">
                Password Requirements:
            </Typography>
            <Alert severity={password.length > 7 ? 'success' : 'error'}>
                contains 8 characters
            </Alert>
            <Alert
                sx={{ my: 1 }}
                severity={hasCapital(password) ? 'success' : 'error'}
            >
                contains a capital letter
            </Alert>
            <Alert severity={hasNumber(password) ? 'success' : 'error'}>
                contains a number
            </Alert>
        </Box>
    );
};

export default PasswordRequirements;