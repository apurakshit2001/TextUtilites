import React, { useState } from 'react';
import NavBar from './Component/NavBar';
import TextForm from './Component/TextForm';
import About from './Component/About';
import Alert from './Component/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Component/Footer';

const App = () => {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [mode, setMode] = useState('light'); // Whether dark mode is on or not
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert('Dark mode has been enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light mode has been enabled', 'success');
    }
  };

  return (
    <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <NavBar title="Hola" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<TextForm heading="TextUtils - Convert and Format Text Easily (Uppercase, Lowercase, Trim, and More)" showAlert={showAlert} />} />
        <Route path="/about" element={<About mode={mode}/>}  />
      </Routes>
      <Footer mode={mode} />
    </Router>
  );
};

export default App;
