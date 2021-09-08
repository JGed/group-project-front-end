import React, { useState } from 'react'
import { Box, TextField, Typography, Button } from '@material-ui/core';
import userRegister from '../../requests/userRegister';
import { useSession } from '../../context/sessionContext';
const Register = ({ closeModal }) => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState();
    const [username, setUsername] = useState('')
    const [usernameError, setUsernameError] = useState();
    const [password, setPassword] = useState('');
    const { setSessionToken } = useSession();
    const handleRegister = async (e) => {
        try {
            const { status, json } = await userRegister({
                email: email,
                username: username,
                password: password
            })
            // successful registration
            if(status === 200) {
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
            if(status === 409) {
                // set the errors
                setEmailError(json.emailMessage);
                setUsernameError(json.usernameMessage);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
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
                        textAlign: 'center'
                        
                    }}
                    noValidate
                    autocomplete='off'
                >
                    <Typography variant='h4' component='h2'>
                        Register
                    </Typography>
                    <div>
                        <TextField
                            label='Email Address'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            fullWidth
                            error={emailError !== undefined}
                            helperText={emailError}
                        />
                    </div>
                    <div>
                        <TextField
                            label='Username'
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            fullWidth
                            error={usernameError !== undefined}
                            helperText={usernameError}
                        />
                    </div>
                    <div>
                        <TextField
                            label='Password'
                            type='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            fullWidth
                        />
                    </div>
                    <div>
                        <Button 
                            variant='contained' 
                            color='secondary'
                            fullWidth
                            onClick={handleRegister}
                        >
                            Register
                        </Button>
                    </div>
                    <div>
                        <Button variant='contained' color='secondary' fullWidth onClick={closeModal}>Close</Button>
                    </div>
                </Box>
            </Box>
    )
}

export default Register;