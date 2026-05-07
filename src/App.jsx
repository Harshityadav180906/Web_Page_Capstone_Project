import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Countdown from './components/Countdown/Countdown';
import Events from './components/Events/Events';
import Schedule from './components/Schedule/Schedule';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Countdown />
              <Events />
            </>
          } />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;