import React, { useState } from 'react'
import { Modal, Box, TextField, Typography, Button } from '@material-ui/core';

const Register = ({ open, handleClose, setSessionToken }) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        try {
            const response = await fetch('http://localhost:3000/user/register', {
                method: 'POST',
                body: JSON.stringify({
                    user: {
                        email: email,
                        username: username,
                        password: password,
                    },
                }),
                headers: new Headers({
                    'Content-Type': 'application/json',
                })  
            })
            .then(res => res.json());
            console.log(response);
            setSessionToken(response.sessionToken);
            handleClose();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        >
            <Box 
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform:'translate(-50%, -50%)',
                    width: '800',
                    height: '1200',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4
                }}  
            >
                <Box
                    component='form'
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '800', maxWidth: '100%' },
                        
                    }}
                    noValidate
                    autocomplete='off'
                >
                    <Typography variant='h4' component='h2'>
                        Register
                    </Typography>
                    <div>
                        <TextField
                            label='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            fullWidth
                        />
                    </div>
                    <div>
                        <TextField
                            label='username'
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            fullWidth
                        />
                    </div>
                    <div>
                        <TextField
                            label='password'
                            type='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            fullWidth
                        />
                    </div>
                    <div>
                        <Button 
                            variant='contained' 
                            fullWidth
                            onClick={handleRegister}
                        >
                            Register
                        </Button>
                    </div>
                </Box>
            </Box>
        </Modal>
    )
}

export default Register;