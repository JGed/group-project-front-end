import './App.css';
import { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  const [loginIsOpen, setLoginIsOpen] = useState(false);
  const [registerIsOpen, setRegisterIsOpen] = useState(false);
  const [sessionToken, setSessionToken] = useState(undefined);
  const handleLoginOpen = () => {setLoginIsOpen(true)}
  const handleLoginClose = () => {setLoginIsOpen(false)};
  const handleRegisterOpen = () => {setRegisterIsOpen(true)}
  const handleRegisterClose = () => {setRegisterIsOpen(false)};
  useEffect(() => {
    const storedToken = localStorage.getItem('sessionToken');
    if(storedToken !== undefined) {
      setSessionToken(storedToken);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('sessionToken', sessionToken)
    console.log(sessionToken)
  }, [sessionToken])

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Login open={loginIsOpen} handleClose={handleLoginClose} setSessionToken={setSessionToken}/>
      <Register open={registerIsOpen} handleClose={handleRegisterClose} setSessionToken={setSessionToken}/>
      <Button variant='contained' onClick={handleLoginOpen}>Login</Button>
      <Button variant='contained' onClick={handleRegisterOpen}>Register</Button>
    </div>
  );
}

export default App;
