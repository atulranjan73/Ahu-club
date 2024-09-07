// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product/Product.jsx';
import Team from './components/Team';
import Official from './components/Official';
import Profile from './components/My acount/Profile';
import Footer from './components/Layout/Footer';
import Registration from './components/Registration';
import Login from './components/Login';
import Withdraw from './components/Withdraw'; // Ensure Withdraw component is imported
import Recharge from './components/Recharge'; // Ensure Recharge component is imported
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Layout/Header'
import { AuthProvider } from './components/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Header/>
      <Router>
        <div className="App">
         
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/" element={<PrivateRoute element={<Home />} />} />
            <Route path="/withdraw" element={<PrivateRoute element={<Withdraw />} />} />
            <Route path="/recharge" element={<PrivateRoute element={<Recharge />} />} />
            <Route path="/product" element={<PrivateRoute element={<Product />} />} />
            <Route path="/team" element={<PrivateRoute element={<Team />} />} />
            <Route path="/official" element={<PrivateRoute element={<Official />} />} />
            <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
