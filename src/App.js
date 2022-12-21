import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './components/Header';
import ContactUs from './Pages/ContactUs';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
