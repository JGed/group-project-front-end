import React, { useState, useEffect, useRef } from 'react';
import {
    Box,
    TextField,
    Typography,
    Button,
    Popper,
    DialogTitle,
    DialogContent,
    IconButton,
    Stack,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import userRegister from '../../requests/userRegister';
import { useSession } from '../../context/sessionContext';
import { BoxContainerSx, BoxFormSx } from './componentSx';
import  { useTheme } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core';
import PasswordRequirements from './PasswordRequirements';
export const hasCapital = (str) => {
    return /[A-Z]/.test(str);
};
export const hasNumber = (str) => {
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
    const [isDisabled, setIsDisabled] = useState(true);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    // reference for the input inside the textfield component for the password
    // use to anchor popper to textfield
    const inputRef = useRef();

    const { setSessionToken } = useSession();

    useEffect(() => {
        // is the password is valid
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

        }
    };

    return (
        <Box
            sx={BoxContainerSx}>
            <Box
                component="form"
                sx={BoxFormSx}
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
                                inputRef={inputRef}
                                onFocus={() => setPasswordIsFocused(true)}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Popper
                                open={
                                    passwordIsFocused
                                }
                                anchorEl={inputRef.current}
                                placement={isSmallScreen ? 'top' : 'right'}
                                modifiers={[{name: 'preventOverflow', enabled: false}]}
                                disablePortal
                            >
                                <PasswordRequirements password={password} />
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
