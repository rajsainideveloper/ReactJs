// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

const Home = () => (
  <div>
    <h2>Welcome to the Home Page</h2>
  </div>
);

export default App;
