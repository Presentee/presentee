import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import './login.css';
import ThemeContext from 'context';
import Button from 'CustomComponents/Button';

export default function CustomLogin(params) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { theme } = React.useContext(ThemeContext);
  const [accountUnconfirmed, setAccountUnconfirmed] = useState(false);

  const handleSubmit = async (e) => {

    console.log(accountUnconfirmed)
    e.preventDefault();
    if (accountUnconfirmed) {
      try {
        await Auth.confirmSignUp(username, password);
        setError('SignUp Successfull!, Please log in');
        setAccountUnconfirmed(false);
      } catch (error) {
        // setError(error.message);
        console.log(error);
      }

    }
    else {
      try {
        const user = await Auth.signIn(username, password);
        params.onSignIn(user);
      } catch (error) {

        if (error.message.includes('User is not confirmed')) {
          setError('User is not confirmed, please check your email. Use code as password to confirm account.');

          //resend confirmation code
          resendConfirmationCode();
          setAccountUnconfirmed(true);
        }
        else {
          // setError(error.message);
          console.log(error);
        }
      }
    }
  };

  async function resendConfirmationCode() {
    try {
      await Auth.resendSignUp(username);

    } catch (error) {
      setError(error.message);
    }
  }

  const handleForgotPassword = (event) => {
    event.preventDefault();
    setError('function not implemented');
  };

  const handleError = (error) => {
    if (error.includes('incorrect')) {
      return 'Incorrect username or password';
    }
    else if (error.includes('User pool')) {
      return 'User does not exist';
    }
    else {
      return error;
    }
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className={`custom-login ${theme}`}>
          <form className={`custom-login form ${theme}`} onSubmit={handleSubmit}>
            <input
              style={{ marginTop: '20px' }}
              type="text"
              placeholder="Email Address"
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
            <Button type="submit" style={{ marginTop: '20px', paddingLeft: '60px', paddingRight: '60px' }}>Sign In</Button>

            <a href="/" onClick={handleForgotPassword} style={{ pointerEvents: 'visible', marginTop: '10px', marginBottom: '10px', color: 'inherit' }}> Forgot Password </a>
          </form>
        </div>
        <Button onClick={params.toggleSignUp} style={{ marginTop: '20px' }}>Create A New Account</Button>
        <div>
          {error && <p style={{ boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)', border: '1px solid red', backgroundColor: 'rgba(255,0,0,0.1)', borderRadius: '5px', padding: '10px', marginTop: '20px' }}>{handleError(error)}</p>}
        </div>
      </div>
    </>

  );
}
