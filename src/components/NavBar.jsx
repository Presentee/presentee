// NavBar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthenticator, Button } from '@aws-amplify/ui-react';


const NavBar = () => {
    const { route, signOut } = useAuthenticator((context) => [
      context.route,
      context.signOut,
    ]);

    const navigate = useNavigate();

    /* function that will sign the user out of authenticated state
    and then navigation back to the login page */
    const logOut = () => {
      signOut();
      navigate('/login');
    }

    return (
        <nav>
            <Button onClick={() => navigate('/')}>Home</Button>
            {/*}
            <Button onClick={() => navigate('/protected')}>
              First Protected Route
            </Button>
          
            <Button onClick={() => navigate('/protected2')}>
              View
            </Button>
            */}
            {route === 'authenticated' ? (
              <Button onClick={() => navigate('/protected2')}>View</Button>
            ) : ""}

            {/* If user is authenticated this button will appear that 
            is labeled create this is where we will create presentations, and 
            when the user is not authenicated it will be empty and nothing
            will appear. */}
            {route === 'authenticated' ? (
              <Button onClick={() => navigate('/create')}>Create</Button>
            ) : ""}

            {/* If user is logged in and authenticated then the button on the
            far left will appear as "Logout", otherwise it will appear as 
            "Login" */}
            {route !== 'authenticated' ? (
              <Button onClick={() => navigate('/login')}>Login</Button>
            ) : (
              <Button onClick={() => logOut()}>Logout</Button>
            )}
        </nav>
    );
}

export default NavBar;