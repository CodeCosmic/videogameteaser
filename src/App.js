import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CountdownTimer from './components/CountdownTimer/CountdownTimer'




function App() {
  return (
    <>
      <Header />
        <div className="App">
          <CountdownTimer countdownTimeStampMS={1676000000000}/>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </div>
      <Footer/>
    </>
  );
}

export default App;