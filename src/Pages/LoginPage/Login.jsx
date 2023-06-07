import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'CustomComponents/Button';
import './login.css';
import {
  useAuthenticator,
  Authenticator,
} from '@aws-amplify/ui-react';

export default function Login() {
  const { route } = useAuthenticator((context) => [context.route] );

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  // const [showSignUp, setShowSignUp] = useState(false);

  // toggle showSignUp state
  // const toggleSignUp = () => {
  //   setShowSignUp(!showSignUp);
  // };


  // const { theme } = React.useContext(ThemeContext);

  useEffect(() => {
    if (user) {
      navigate('/', { replace: true });
    }
  }, [user, navigate]);

  useEffect(() => {
    if (route === 'authenticated') {
        navigate('/Home', {replace: true});
    }
});

  // const handleSignOut = async () => {
  //   try {
  //     await Auth.signOut();
  //     setUser(null);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <>
      <Authenticator>
        {({ signOut }) => <Button onClick={signOut}>Sign Out</Button>}
      </Authenticator>

      {/* <div className={`custom-login ${theme}`}>
        {user ? (
          <Button onClick={handleSignOut}>Sign Out</Button>
        ) : (
          <>
            {showSignUp ? (
              <CustomSignUp 
                onSignUp={handleSignUpSuccess}
                toggleSignUp={toggleSignUp}
                />
            ) : (
              <CustomLogin
                toggleSignUp={toggleSignUp}
                onSignIn={setUser}
                onForgotPassword={handleForgotPassword}
              />
            )}
          </>
        )}
      </div> */}
    </>
  );
}
