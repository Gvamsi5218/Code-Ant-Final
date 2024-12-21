import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';

const App = () => (
  <Router>
    <Routes>
      {/* Route for the login page */}
      <Route path="/" element={<LoginPage />} />
      
      {/* Route for the dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
);

export default App;
