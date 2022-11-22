import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthenticator, Button } from '@aws-amplify/ui-react';


const NavBar = () => {
    const { route, signOut } = useAuthenticator((context) => [
      context.route,
      context.signOut,
    ]);
    const navigate = useNavigate();

    const logOut = () => {
      signOut();
      navigate('/login');
    }

    return (
        <nav>
            <Button onClick={() => navigate('/')}>Home</Button>
            <Button onClick={() => navigate('/protected')}>
              First Protected Route
            </Button>
            <Button onClick={() => navigate('/protected2')}>
              Second Protected Route
            </Button>
            {route !== 'authenticated' ? (
              <Button onClick={() => navigate('/login')}>Login</Button>
            ) : (
              <Button onClick={() => logOut()}>Logout</Button>
            )}
        </nav>
    );
}

export default NavBar;