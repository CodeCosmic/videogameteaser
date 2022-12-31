import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import CountdownTimer from './components/CountdownTimer/CountdownTimer'
import LoreCard from './features/Cards/LoreCard';




function App() {
  return (
    <div className="App" style={{backgroundColor: 'gray' }}>
      <Header/>
      <LoreCard />
      <CountdownTimer countdownTimeStampMS={1676000000000}/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;