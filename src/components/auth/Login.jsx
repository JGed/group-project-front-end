import React, { useState } from 'react';
import { Box, TextField, Typography, Button } from '@material-ui/core';
import userLogin from '../../requests/userLogin';

const Login = ({ closeModal, setSessionToken }) => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState();
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState();

    const handleLogin = async (e) => {
        try {
            const { status, json } = await userLogin({
                email: email,
                password: password,
            });
            // successful login
            if (status === 200) {
                // clear the errors if there are any
                setEmailError(undefined);
                setPasswordError(undefined);

                // set the session token, clear the form fields and then close the modal
                setSessionToken(json.sessionToken);
                setEmail('');
                setPassword('');
                closeModal();
            }
            // failed login
            if (status === 409) {
                // set the errors
                setEmailError(json.emailMessage);
                setPasswordError(json.passwordMessage);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '800',
                    height: '800',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': {
                            m: 1,
                            width: '800',
                            maxWidth: '100%',
                        },
                        textAlign: 'center'
                    }}
                    noValidate
                    autocomplete="off"
                >
                    <Typography
                        variant="h4"
                        component="h2"
                        sx={{  mb: 2 }}
                    >
                        Login
                    </Typography>
                    <div>
                        <TextField
                            label="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                            required
                            error={emailError !== undefined}
                            helperText={emailError}
                        />
                    </div>
                    <div>
                        <TextField
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth
                            required
                            error={passwordError !== undefined}
                            helperText={passwordError}
                        />
                    </div>
                    <div>
                        <Button
                            variant="contained"
                            fullWidth
                            onClick={handleLogin}
                        >
                            Login
                        </Button>
                    </div>
                    <div>
                        <Button variant='contained' fullWidth onClick={closeModal}>Close</Button>
                    </div>
                </Box>
            </Box>
    );
};

export default Login;
