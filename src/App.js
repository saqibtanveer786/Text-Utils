import './App.css';
import Navbar from './components/Navbar';
import Textutil from './components/Textutil';
import Alert from './components/Alert';
import { useState } from 'react';
import React from "react";

function App() {
  const [Mode, setMode] = useState('light')
  const [btnText, setBtnText] = useState('Dark Mode')
  const [btnTextColor, setBtnTextColor] = useState('dark')
  const [alerttxt, setAlerttxt] = useState(null)
  const darkModeHandler = () => {
    if (Mode === 'light') {
      setMode('dark')
      setBtnText('Light Mode')
      document.body.style.backgroundColor = '#222222'
      setBtnTextColor('light')
      showAlert('Dark Mode Enabled', 'success')
    } else {
      setMode('light')
      setBtnText('Dark Mode')
      document.body.style.backgroundColor = 'white'
      setBtnTextColor('dark')
      showAlert('Light Mode Enabled', 'success')
    }
  }
  const showAlert = (txt, responseCode) => {
    setAlerttxt({
      message: txt,
      type: responseCode,
    })
    setTimeout(() => {
      setAlerttxt(null)
    }, 1000);
  }


  return (
    <>
    
        <Navbar title="Text Utils" src="https://localhost:3000/public/icons8-paste-as-text-50.png" mode={Mode} darkModeHandlerProp={darkModeHandler} btnText={btnText} btnTextColor={btnTextColor} />
        <Alert alert={alerttxt} />
        <Textutil mode={Mode} sAlert={showAlert} />
      </>
      );
}

      export default App;
