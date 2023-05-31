import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'CustomComponents/Button';
import './login.css';
import { useAuthenticator, Authenticator } from '@aws-amplify/ui-react';

export default function Login() {
  const { route } = useAuthenticator((context) => [context.route] );

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  

  useEffect(() => {
    if (user) {
      navigate('/', { replace: true });
    } else {
      setUser(null);
    }
  }, [user, navigate]);

  useEffect(() => {
    if (route === 'authenticated') {
        navigate('/Home', {replace: true});
    }
});

  return (
    <>
      <Authenticator>
        {({ signOut }) => <Button onClick={signOut}>Sign Out</Button>}
      </Authenticator>
    </>
  );
}
