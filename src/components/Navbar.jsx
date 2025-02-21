import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import React from 'react';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const closeNav = () => {
    setShowNavbar(false);
  };

  useEffect(() => {
    if (showNavbar) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      document.body.style.overflow = 'auto'; // Allow scrolling
    }
  }, [showNavbar]);

  return (
    <div className="navbar-container">
      <div className="logo">
        <div><img src="/logo.png" className='logo-img'/></div>
        <h4>WOLF FC</h4>
      </div>
      <div className="menu-icon" onClick={handleShowNavbar}>
        <GiHamburgerMenu className="hamburger" />
      </div>
      {showNavbar && <div className="overlay" onClick={closeNav}></div>} {/* Overlay when navbar is shown */}
      <div className={`nav-elements ${showNavbar && 'active'}`}>
        {/* <RxCross2 className="close-nav" onClick={closeNav} /> */}
        <Link to="/" className="nav-element" onClick={closeNav}>Home</Link>
        <Link to="/club" className="nav-element" onClick={closeNav}>Club</Link>
        <Link to="/scorers" className="nav-element" onClick={closeNav}>Scorers</Link>
        <Link to="/academy" className="nav-element" onClick={closeNav}>Academy</Link>
        <Link to="/chat" className="nav-element" onClick={closeNav}>Chat</Link>
      </div>
    </div>
  );
};

export default Navbar;