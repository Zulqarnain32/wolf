import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Scorers from './components/Scorers';
import Club from './components/Club';
import Home from './components/Home';
import './App.css';
import Academy from './components/Academy';
import Chat from './components/Chat';

const App = () => {
  const Layout = ({ children }) => {
    const location = useLocation();
    let  showNavbar = location.pathname === '/club' || location.pathname === '/academy'  ;
  console.log("value of shownavbar", showNavbar);
  
    return (
      <>
        {!showNavbar && <Navbar />}
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
          <Route path="/club" element={<Club />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
