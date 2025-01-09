import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Scorers from './components/Scorers';
import Matches from './components/Matches';
import Home from './components/Home';
import './App.css';

const App = () => {
  const Layout = ({ children }) => {
    const location = useLocation();
    const showNavbar = location.pathname !== '/matches';

    return (
      <>
        {showNavbar && <Navbar />}
        {children}
      </>
    );
  };

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scorers" element={<Scorers />} />
          <Route path="/matches" element={<Matches />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
