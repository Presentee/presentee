import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import './login.css';
import ThemeContext from 'context';
import Button from 'CustomComponents/Button';

export default function CustomSignUp(params) {
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
      const username = email;
      const { user } = await Auth.signUp({ username, password });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleError = (error) => {
    console.log("Handling error:" + error);

    if (error.includes('incorrect')) {
      return 'Incorrect username or password';
    }
    else if (error.includes('Username cannot be empty')) {
      return 'Email address cannot be empty';
    }
    else {
      return error;
    }
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className={`custom-login ${theme}`}>
          <form onSubmit={handleSubmit}>

            <h3 style={{ marginBottom: '5px', marginTop: '0px' }}>Sign Up</h3>
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
            <Button style={{ marginTop: '20px' }} type="submit">Create Account</Button>
          </form>
        </div>

        <Button onClick={params.toggleSignUp} style={{ marginTop: '20px' }}>Back to Login</Button>

        <div>
          {error && <p style={{ boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)', border: '1px solid red', backgroundColor: 'rgba(255,0,0,0.1)', borderRadius: '5px', padding: '10px', marginTop: '20px' }}>{handleError(error)}</p>}
        </div>
      </div>
    </>

  );
}
