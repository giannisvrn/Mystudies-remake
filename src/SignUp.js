import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './icons/logo.png';
import { Link } from 'react-router-dom';
import leftarrow from './icons/left-arrow.png';

import { createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from './config/firebase';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => { 
      try { 
        await createUserWithEmailAndPassword(auth, email, password);
        
        if (password !== confirmPassword) {
              alert('Οι κωδικοί δεν ταιριάζουν.');
              return;
            }
        navigate('/loggedin');
      } catch(err) {
        console.error(err);
      }
  };

  const handleKeyDown = (e) => {
    // Check if the pressed key is Enter
    if (e.key === 'Enter') {
      handleSignUp();
    }
  };

  return (
    <>
      <div className="return-container">
        <img src={leftarrow} alt="Arrow" className="details-image" />
        <Link to="/" className="details-return">
          Επιστροφή
        </Link>
      </div>
      <div className="logo-name">
        <img src={logo} alt="logo" />
        <h4 className="name"> ΕΘΝΙΚΟΝ & ΚΑΠΟΔΙΣΤΡΙΑΚΟΝ ΠΑΝΕΠΙΣΤΗΜΙΟ ΑΘΗΝΩΝ</h4>
      </div>
      <div className="sign-in-container">
        <h2>Εγγραφή</h2>
        <form className="sign-in-form">
          <div className="form-group">
            <label>Όνομα χρήστη:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Κωδικός:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Επιβεβαίωση κωδικού:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>

          <button type="button" onClick={handleSignUp} className="button-signin">
            Εγγραφή
          </button>
          <Link to='/signin' className='new'>
             Έχετε ήδη λογαριασμό; Συνδεθείτε τώρα!
            </Link>
        </form>
      </div>
    </>
  );
};

export default SignIn;
