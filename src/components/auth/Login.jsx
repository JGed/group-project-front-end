import React, { useState } from 'react';
import { Modal, Box, TextField, Typography, Button } from '@material-ui/core';
import userLogin from '../../requests/userLogin';

const Login = ({ open, handleClose, setSessionToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        try {
            const { status, json } = await userLogin({
                user: {
                    email: email,
                    password: password
                }
            })
            console.log(json)
            if(status === 200) {
                setSessionToken(json.sessionToken);
                handleClose();
                setEmail('');
                setPassword('');
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
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
                    }}
                    noValidate
                    autocomplete="off"
                >
                    <Typography variant="h4" component="h2">
                        Login
                    </Typography>
                    <div>
                        <TextField
                            label="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                        />
                    </div>
                    <div>
                        <TextField
                            label="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth
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
                </Box>
            </Box>
        </Modal>
    );
};

export default Login;
