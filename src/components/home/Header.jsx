import React from 'react';
import { Button } from '@material-ui/core';
import Login from './components/auth/Login';
import Register from './components/auth/Register';


const Header = (props) => {
    return ( 
        <div className="App">
      <h1>ClickNCook</h1>
      <Login open={loginIsOpen} handleClose={handleLoginClose} setSessionToken={setSessionToken}/>
      <Register open={registerIsOpen} handleClose={handleRegisterClose} setSessionToken={setSessionToken}/>
      <Button variant='contained' onClick={handleLoginOpen}>Login</Button>
      <Button variant='contained' onClick={handleRegisterOpen}>Register</Button>
    </div>
  );
}
 
export default Header;