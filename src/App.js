import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CountdownTimer from './components/CountdownTimer/CountdownTimer'




function App() {
  return (
    <div className="App" style={{backgroundColor: 'gray' }}>
      <Header/>
      <CountdownTimer countdownTimeStampMS={1676000000000}/>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;