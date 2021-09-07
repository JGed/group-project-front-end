import './App.css';
import { useState, useEffect } from 'react';
import { Button, Typography, Modal } from '@material-ui/core';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import CreateRecipe from './components/CreateRecipe';

function App() {

    const [sessionToken, setSessionToken] = useState(undefined);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalComponent, setModalComponent] = useState();

    useEffect(() => {
        const storedToken = localStorage.getItem('sessionToken');
        if (storedToken !== undefined) {
            setSessionToken(storedToken);
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('sessionToken', sessionToken);
    }, [sessionToken]);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const handleLogout = (e) => {
        setSessionToken(undefined);
    };

    const handleClick = name => e => {
        setModalComponent(name);
        openModal();
    }

    const renderModalComponent = (component) => {
        switch (component) {
            case 'Login':
                return <Login closeModal={closeModal} setSessionToken={setSessionToken} />;
            case 'Register':
                return <Register closeModal={closeModal} setSessionToken={setSessionToken} />;
            case 'CreateRecipe':
                return <CreateRecipe closeModal={closeModal} sessionToken={sessionToken} />
            default:
                return <></>;
        }
    };

    return (
        <div className="App">
            <h1>ClickNCook</h1>
            <Modal
                open={modalIsOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {
                  <div>
                    {renderModalComponent(modalComponent)}
                  </div>
                }
            </Modal>
            {sessionToken ?
            <Button variant="contained" onClick={handleLogout}>Logout</Button>
            :
            <>
            <Button variant="contained" onClick={handleClick('Login')}>Login</Button>
            <Button variant="contained" onClick={handleClick('Register')}>Register</Button>
            </>
            }
            {sessionToken ? <Button variant='contained' onClick={handleClick('CreateRecipe')}>Create Recipe</Button> : <></>}
            <Typography>
                You are logged {sessionToken ? 'in' : 'out'}.
            </Typography>
        </div>
    );
}

export default App;
