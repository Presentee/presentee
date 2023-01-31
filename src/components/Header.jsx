// ------------- IMPORT STATEMENTS ------------------------
import React, { useContext} from 'react'
import "./Navigation/NavStyling.css";
import { useAuthenticator } from '@aws-amplify/ui-react';

import Button from 'components/CustomComponents/Button'

import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '@react-pdf-viewer/core';

import DarkModeSlider from './Navigation/DarkModeSlider';
// ---------- END OF IMPORTS -----------------------------

// --------------- NAVBAR ---------------------------------
const Header = () => {
    // used for navigations 
    const navigate = useNavigate();
    const { route, signOut } = useAuthenticator((context) => [context.route, context.signOut]);

    // context controls the darkmode and light mode controls
    const darkMode = useContext(ThemeContext);


    const logOut = () => {
        signOut();
        navigate('/login');
    }

    return (
        <nav className={`custom-navbar ${darkMode.mode ? 'dark-theme' : 'light-theme'}`}>
            <Button onClick={() => navigate('/')}>Presentee</Button>
           
            <div alignItems="center">
                {route === 'authenticated' ? (
                    <Button onClick={() => navigate('/join')}>Join</Button>
                ) : null }
            </div>

            <div marginLeft="auto">
                <DarkModeSlider style={{marginRight: "20px", marginLeft: "-40px"}}/>

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

export default Header