import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'CustomComponents/Button';
import './login.css';
import {
  useAuthenticator,
  Authenticator,
} from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import CustomLogin from './CustomLogin';
import { ThemeContext } from '@react-pdf-viewer/core';
import CustomSignUp from './CustomSignup';


export default function Login() {
  const { route } = useAuthenticator((context) => [context.route]);

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showSignUp, setShowSignUp] = useState(false);
  const [userConfirmation, setUserConfirmation] = useState(null);

  // toggle showSignUp state
  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };


  const { theme } = React.useContext(ThemeContext);

  useEffect(() => {
    if (user) {
      navigate('/Home', { replace: true });
      window.location.reload();
    }
  }, [user]);

  useEffect(() => {
    if (route === 'authenticated') {
      navigate('/Home', { replace: true });

    }
  });

  return (
    <>

      <div className={`custom-login ${theme}`}>
        {!showSignUp ? (
          <CustomLogin
            toggleSignUp={toggleSignUp}
            onSignIn={setUser}
            userConfirmation={userConfirmation}
            setUserConfirmation={setUserConfirmation}
          // onForgotPassword={handleForgotPassword}
          />
        ) : (
          <CustomSignUp
            toggleSignUp={toggleSignUp}
            userConfirmation={userConfirmation}
            setUserConfirmation={setUserConfirmation}
          />
        )}
      </div>
    </>
  );
}
