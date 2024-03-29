import React from 'react';
import { Link } from 'react-router-dom';
import logo from './icons/logo.png';
import login from './icons/login.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <header>
        <img src={logo} alt="Logo" />
      </header>
      <h4 className="name">ΕΘΝΙΚΟΝ & ΚΑΠΟΔΙΣΤΡΙΑΚΟΝ ΠΑΝΕΠΙΣΤΗΜΙΟ ΑΘΗΝΩΝ</h4>
      <div className="links-2">
        <Link to="/signup" className="signup-link">
          Εγγραφή
        </Link>
        <Link to="/signin" className="signin-link">
          <img src={login} alt="login" className="login-image" />
          Σύνδεση
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
