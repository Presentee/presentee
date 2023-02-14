// ------------- IMPORT STATEMENTS ------------------------
import React, { useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '@react-pdf-viewer/core';

import { useAuthenticator } from '@aws-amplify/ui-react';

import Button from 'components/CustomComponents/Button'

import DarkModeSlider from './DarkModeSlider';

import "./NavStyling.css";
// ---------- END OF IMPORTS -----------------------------




// --------------- NAVBAR ---------------------------------
/* Right now this is considered a header... but I am thinking that this is really more of 
   a navigation bar. So we might want to change the name of this to NavigationBar. If we 
   do something like that maybe we do place it in the pages folder. */

const NavigationBar = () => {
    // used for navigations 
    const navigate = useNavigate();
    const { route, signOut } = useAuthenticator((context) => [context.route, context.signOut]);

    // context controls the darkmode and light mode controls
    const darkMode = useContext(ThemeContext);


    const logOut = () => {
        signOut();
        navigate('/');
    }

    return (
        <nav className={`custom-navbar ${darkMode.mode ? 'dark-theme' : 'light-theme'}`}>

            {/* This button is where the logo will go and will be the default "Go Home" button */}
            <Button onClick={() => navigate('/')}>Presentee</Button>
           
            {/* These buttons will be the essential navigation buttons, which should stay in this format so that 
                there is some standard to how they all will look and will make better use to read the code. */}
            <div alignItems="center">

                {route === 'authenticated' ? (
                    <Button onClick={() => navigate('/join')}>Join</Button>
                ) : null }

                {route === 'authenticated' ? (
                    <Button onClick={() => navigate('/present')}>Present</Button>
                ) : null }

                {route === 'authenticated' ? (
                    <Button onClick={() => navigate('/create')}>Create</Button>
                ) : null }

                {/* The about page will be located in here regaurdless if user is authenticated or not */}
                <Button onClick={() => navigate('/about')}>About</Button>


            </div>

            <div marginLeft="auto">
                <DarkModeSlider style={{marginRight: "20px", marginLeft: "-40px"}}/>

                {/* This will first determine whether the account has been authenticated. If the account has been 
                    authenticated, then the button on the right will read "Sign out". Otherwise, the button
                    will be the default sign in button that will navigate to the login page. */}
                {route === 'authenticated' ? (
                    <Button onClick={logOut} size="small">Sign Out</Button>
                ) : (
                    <Button onClick={() => navigate('/login')} marginInlineStart="auto" size="small">Sign In</Button>
                )}

            </div>

        </nav>
    );
}
// ---------------- END OF NAVBAR ---------------------


// Could add some styles here, so just add a css page, whever is easier

export default NavigationBar