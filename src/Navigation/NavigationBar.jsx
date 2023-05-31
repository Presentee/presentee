import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ThemeContext } from '@react-pdf-viewer/core';
import { useAuthenticator } from '@aws-amplify/ui-react';
import DarkModeSlider from './DarkModeSlider';
import "./NavStyling.css";

export default function NavigationBar() {
   
    const { route, signOut } = useAuthenticator((context) => [context.route, context.signOut]);
    const theme = useContext(ThemeContext);

    const logOut = () => {
        signOut();
    }

    return (
        <nav className={`custom-navbar ${theme}`} >

            <a href='/Home' style={{ display: 'flex', alignItems: 'center', width: '50px', height: '50px', backgroundImage: "url('PresenteeLogo3.png')", backgroundSize: 'cover', minWidth: '50px' }}> </a>

            <div>
                <div className="left-section">
                    <DarkModeSlider style={{ marginRight: "20px" }} />
                </div>
            </div>


            <div style={{ marginRight: 'auto', marginLeft: 'auto' }}>
            <Link to="/join">Join</Link>

                {route === 'authenticated' && (
                    <>
                        <Link to='/create'>Create</Link>
                        <Link to='/present'>Present</Link>
                    </>
                )}

                <Link to='/about'>About</Link>
            </div>

            <div className='right-div'>
                
                {route === 'authenticated' ? (
                    <Link to='/settings' size="small">
                        Settings
                    </Link>
                ) : (
                    ""
                )}

               

                {route === 'authenticated' ? (
                    <button onClick={logOut} size="small">
                        Sign Out
                    </button>
                ) : (
                    <Link to='/login' marginInlineStart="auto" size="small">Sign In</Link>
                )}

            </div>

        </nav>
    );
}