import React, { useState } from 'react';
import {
    Box,
    TextField,
    Typography,
    Button,
    Stack,
    DialogTitle,
    IconButton,
    DialogContent,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import userLogin from '../../requests/userLogin';
import { useSession } from '../../context/sessionContext';
const Login = ({ closeModal, setModalComponent }) => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState();
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState();
    const { setSessionToken } = useSession();

    const onClose = (e) => {
        setModalComponent('');
        closeModal();
    };
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
                maxWidth: '100%',
                maxHeight: '100%',
                bgcolor: 'neutral.light',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
            }}
        >
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': {
                        m: 2,
                        width: '40ch',
                        maxWidth: '100%',
                    },
                    textAlign: 'center',
                }}
                noValidate
                autocomplete="off"
            >
                <DialogTitle id="modal-title" variant="h2">
                    Login
                    <IconButton
                        aria-label="close"
                        onClick={onClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: 'info.main',
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <Stack spacing={3}>
                        <div>
                            <TextField
                                label="Email Address"
                                value={email}
                                color="info"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                error={emailError !== undefined}
                                helperText={emailError}
                            />
                        </div>
                        <div>
                            <TextField
                                label="Password"
                                type="password"
                                color="info"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                error={passwordError !== undefined}
                                helperText={passwordError}
                            />
                        </div>
                        <div>
                            <Button
                                sx={{ width: '40ch' }}
                                id="modal-description"
                                variant="contained"
                                color="secondary"
                                onClick={handleLogin}
                            >
                                Login
                            </Button>
                        </div>
                        <div>
                            <Typography>
                                Don't have an account with us?{' '}
                                <Button
                                    color="secondary"
                                    onClick={() =>
                                        setModalComponent('Register')
                                    }
                                >
                                    Register
                                </Button>
                            </Typography>
                        </div>
                    </Stack>
                </DialogContent>
            </Box>
        </Box>
    );
};

export default Login;
