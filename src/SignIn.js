import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './icons/logo.png'
import { Link } from 'react-router-dom';
import leftarrow from './icons/left-arrow.png'

import {auth} from './config/firebase';
import { signInWithEmailAndPassword} from 'firebase/auth';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      console.log('Signing in with:', email, password);
      await signInWithEmailAndPassword(auth,email,password);

      // After successful sign-in, navigate to the 'loggedin' page
      navigate('/loggedin');
    } catch(err) {
      console.error(err);
      alert('not a valid account');
    }
  };
  
  const handleKeyDown = (e) => {
    // Check if the pressed key is Enter
    if (e.key === 'Enter') {
      handleSignIn();
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
    <div className='logo-name'>
      <img src={logo} alt='logo'/>
      <h4 className='name'> ΕΘΝΙΚΟΝ & ΚΑΠΟΔΙΣΤΡΙΑΚΟΝ ΠΑΝΕΠΙΣΤΗΜΙΟ ΑΘΗΝΩΝ</h4>
    </div>
    <div className="sign-in-container">
      <h2>Σύνδεση</h2>
      <form className="sign-in-form">
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
            onKeyDown={handleKeyDown}
          />
        </div>

        <button type="button" onClick={handleSignIn} className='button-signin'>
          Σύνδεση
        </button>
        <Link to='/password-reset' className='forgot-pwd'>
          Ξεχάσατε τον κωδικό σας;
        </Link>
        <Link to='/signup' className='new'>
          Δεν έχετε λογαριασμό; Εγγραφή τώρα!
        </Link>
      </form>
    </div>
    </>
  );
};

export default SignIn;
