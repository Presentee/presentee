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
      <div style={{margin: "2rem"}}> 
        <nav>
            <Button onClick={() => navigate('/')} style={{backgroundColor: "lightblue"}}>Home</Button>
            <Button onClick={() => navigate('/protected')} style={{backgroundColor: "lightblue"}}>
              First Protected Route
            </Button>
            <Button onClick={() => navigate('/protected2')} style={{backgroundColor: "lightblue"}}>
              Second Protected Route
            </Button>

            {/* If user is authenticated this button will appear that 
            is labeled create this is where we will create presentations, and 
            when the user is not authenicated it will be empty and nothing
            will appear. */}
            {route === 'authenticated' ? (
              <Button onClick={() => navigate('/create')} style={{backgroundColor: "lightblue"}}>Create</Button>
            ) : ""}

            {/* If user is logged in and authenticated then the button on the
            far left will appear as "Logout", otherwise it will appear as 
            "Login" */}
            {route !== 'authenticated' ? (
              <Button onClick={() => navigate('/login')} style={{backgroundColor: "lightblue"}}>Login</Button>
            ) : (
              <Button onClick={() => logOut()} style={{backgroundColor: "lightblue"}}>Logout</Button>
            )}
        </nav>
      </div>
    );
}

export default NavBar;