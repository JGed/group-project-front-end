import { useState, useEffect } from 'react';
import './App.css';
import HomeIndex from './components/home/HomeIndex';
import Footer from './components/home/Footer';

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

    <div>
      <HomeIndex />
      <Footer />      
    </div>    
  );
}

export default App;
