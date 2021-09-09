import React, { useState, useEffect, useRef } from 'react';
import {
    Box,
    TextField,
    Typography,
    Button,
    Alert,
    Container,
    Popper,
    Paper,
    DialogTitle,
    DialogContent,
    IconButton,
    Stack,
    Fade,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import userRegister from '../../requests/userRegister';
import { useSession } from '../../context/sessionContext';

const hasCapital = (str) => {
    return /[A-Z]/.test(str);
};
const hasNumber = (str) => {
    return /[0-9]/.test(str);
};
const passwordIsValid = (pass) => {
    return pass.length > 7 && hasCapital(pass) && hasNumber(pass);
};
const Register = ({ closeModal, setModalComponent }) => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState();

    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState();

    const [password, setPassword] = useState('');
    const [passwordIsFocused, setPasswordIsFocused] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const inputRef = useRef();

    const { setSessionToken } = useSession();

    useEffect(() => {
        setIsDisabled(!passwordIsValid(password));
    }, [password]);

    const onClose = (e) => {
        closeModal();
    };
    const handleRegister = async (e) => {
        try {
            const { status, json } = await userRegister({
                email: email,
                username: username,
                password: password,
            });
            // successful registration
            if (status === 200) {
                // clear any existing errors
                setEmailError(undefined);
                setUsernameError(undefined);

                // set the session token and clear the form fields and close the modal
                setSessionToken(json.sessionToken);
                setEmail('');
                setUsername('');
                setPassword('');
                closeModal();
            }
            // failed registration
            if (status === 409) {
                // set the errors
                setEmailError(json.emailMessage);
                setUsernameError(json.usernameMessage);
            }
        } catch (error) {
            console.log(error);
        }
    };

    console.log(inputRef);
    console.log(document.activeElement);
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
                    Register
                    <IconButton
                        aria-label="close"
                        onFocus={() => setPasswordIsFocused(false)}
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
                                onFocus={() => setPasswordIsFocused(false)}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                error={emailError !== undefined}
                                helperText={emailError}
                            />
                        </div>
                        <div>
                            <TextField
                                label="Username"
                                value={username}
                                color="info"
                                onFocus={() => setPasswordIsFocused(false)}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                error={usernameError !== undefined}
                                helperText={usernameError}
                            />
                        </div>
                        <div>
                            <TextField
                                label="Password"
                                type="password"
                                color="info"
                                required
                                value={password}
                                ref={inputRef}
                                onFocus={() => setPasswordIsFocused(true)}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Popper
                                open={
                                    passwordIsFocused
                                }
                                anchorEl={inputRef.current}
                                placement={'right'}
                                disablePortal
                            >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'space-between',
                                                backgroundColor: 'info.main',
                                                padding: 1,
                                                m: 1
                                            }}
                                        >
                                            <Typography color="neutral.light">
                                                Password Requirements:
                                            </Typography>
                                            <Alert
                                                severity={
                                                    password.length > 7
                                                        ? 'success'
                                                        : 'error'
                                                }
                                            >
                                                contains 8 characters
                                            </Alert>
                                            <Alert
                                                sx={{ my: 1 }}
                                                severity={
                                                    hasCapital(password)
                                                        ? 'success'
                                                        : 'error'
                                                }
                                            >
                                                contains a capital letter
                                            </Alert>
                                            <Alert
                                                severity={
                                                    hasNumber(password)
                                                        ? 'success'
                                                        : 'error'
                                                }
                                            >
                                                contains a number
                                            </Alert>
                                        </Box>
                            </Popper>
                        </div>
                        <div>
                            <Button
                                variant="contained"
                                color="secondary"
                                disabled={isDisabled}
                                sx={{ width: '40ch' }}
                                onFocus={() => setPasswordIsFocused(false)}
                                onClick={handleRegister}
                            >
                                Register
                            </Button>
                        </div>
                        <div>
                            <Typography>
                                Already have an account?{' '}
                                <Button
                                    color="secondary"
                                    onFocus={() => setPasswordIsFocused(false)}
                                    onClick={() => setModalComponent('Login')}
                                >
                                    Login
                                </Button>
                            </Typography>
                        </div>
                    </Stack>
                </DialogContent>
            </Box>
        </Box>
    );
};

export default Register;
