import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import CountdownTimer from './components/CountdownTimer/CountdownTimer'





function App() {
  return (
    <div className="App" >
      <Header/>
      <CountdownTimer countdownTimeStampMS={1679000000000}/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
