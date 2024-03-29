import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [resetEmailSent, setResetEmailSent] = useState(false);

  const handleResetPassword = async () => {
    const auth = getAuth();

    try {
      await sendPasswordResetEmail(auth, email);
      setResetEmailSent(true);
    } catch (error) {
      console.error('Error sending password reset email:', error.message);
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button onClick={handleResetPassword}>Send Reset Email</button>

      {resetEmailSent && <p>Password reset email sent. Check your inbox.</p>}
    </div>
  );
};

export default PasswordReset;
