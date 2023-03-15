import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import './login.css';
import ThemeContext from 'context';
import Button from 'CustomComponents/Button';

function CustomLogin({ onSignIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { theme } = React.useContext(ThemeContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await Auth.signIn(username, password);
      onSignIn(user);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    // Implement navigation or display a forgot password form
  };

  return (
    <div className={`custom-login ${theme}`}>
      <form className={`custom-login form ${theme}`} onSubmit={handleSubmit}>
        <input
          style={{ marginTop: '20px'}}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          style={{ marginTop: '20px' }}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" style={{ marginTop: '20px' }}>Sign In</Button>

        <a href="/" onClick={handleForgotPassword} style={{ pointerEvents: 'visible', marginTop: '20px', marginBottom: '10px', color: 'inherit' }}> Forgot Password </a>

        <Button type="submit" style={{ marginTop: '20px' }}>Sign Up</Button>
      </form>

      {error && <p>{error}</p>}
    </div>
  );
}

export default CustomLogin;
