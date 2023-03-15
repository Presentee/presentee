import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import './login.css';
import ThemeContext from 'context';

export default function CustomSignUp({ onSignUp }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { theme } = React.useContext(ThemeContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const user = await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          name: name,
          email: email,
        },
      });
      onSignUp(user);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={`custom-login ${theme}`}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name (Optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
