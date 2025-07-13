import React from 'react';
// 1. Change BrowserRouter to HashRouter
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Appointments from './components/Appointments';
import Reviews from './components/Reviews';
import Profile from './components/Profile';
import Login from './components/Login';

function App() {
  return (
    // 2. Use HashRouter here
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/reviews"element={<Reviews />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </Router> // And here
  );
}

export default App;
