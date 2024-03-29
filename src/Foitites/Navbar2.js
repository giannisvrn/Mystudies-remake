import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../icons/logo.png'
import './Navbar2.css';
import user from '../icons/user.png'

import {auth} from '../config/firebase';
import { signOut } from 'firebase/auth';

const Navbar2 = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (path) => {
    setDropdownOpen(false);
    window.location.href = path;
  };

  const handleLogOut = async (path) => {
    try { 
      await signOut(auth);
      setDropdownOpen(false);
      window.location.href = path;
    } catch(err) { 
      console.error(err);
    }
  }

  return (
    <nav className="navbar">
      <header>
        <img src={logo} alt='Logo'></img>
      </header>
      <h4 className='name'> ΕΘΝΙΚΟΝ & ΚΑΠΟΔΙΣΤΡΙΑΚΟΝ ΠΑΝΕΠΙΣΤΗΜΙΟ ΑΘΗΝΩΝ</h4>
      <div className="links">
        <Link to="/loggedin">Αρχική</Link>
        <Link to="/mathimata">Μαθήματα</Link>
        <Link to="/vathmologia">Βαθμολογία</Link>
        <Link to="/pistopoihtika">Πιστοποιητικά</Link>

        {/* Dropdown List for Το προφίλ μου */}
        <div className="dropdown" onClick={toggleDropdown}>
          <span className={`profile-dropdown ${isDropdownOpen ? 'open' : ''}`}>
            <img src={user} alt='dropdown' className='user-dropdown'></img>
          </span>
        
          {isDropdownOpen && (
            <div className="dropdown-options">
              <div onClick={() => handleOptionClick('/profile')}>Προφίλ</div>
              <div onClick={() => handleLogOut('/')}>Αποσύνδεση</div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
