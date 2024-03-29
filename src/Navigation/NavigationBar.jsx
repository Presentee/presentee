import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '@react-pdf-viewer/core';
import { useAuthenticator } from '@aws-amplify/ui-react';
import Button from 'CustomComponents/Button'
import "./NavStyling.css";

export default function NavigationBar() {
    const navigate = useNavigate();
    const { route, signOut } = useAuthenticator((context) => [context.route, context.signOut]);
    const theme = useContext(ThemeContext);

    const logOut = () => {
        signOut();
        navigate('/login');
    }

    return (
        <nav className={`custom-navbar ${theme}`} >

            <a href='/' style={{ display: 'flex', alignItems: 'center', width: '50px', height: '50px', backgroundImage: "url('PresenteeLogo3.png')", backgroundSize: 'cover', minWidth: '50px' }}> </a>


            <div style={{ marginRight: 'auto', marginLeft: 'auto' }}>
                {/* <Button onClick={() => navigate("/questions")}>Questions</Button> */}
                {/* <Button onClick={() => navigate("/polls")}>Polls</Button> */}
                <Button onClick={() => navigate('/join')}>Join</Button>


                {route === 'authenticated' && (
                    <>
                        <Button onClick={() => navigate('/create')}>Create</Button>
                        <Button onClick={() => navigate('/present')}>Present</Button>
                    </>
                )}

                <Button onClick={() => navigate('/about')}>About</Button>
            </div>

            <div className='right-div'>

                {route === 'authenticated' ? (
                    <Button onClick={() => navigate('/settings')} size="small">
                        Settings
                    </Button>
                ) : (
                    <Button onClick={() => navigate('/guestsettings')} size="small">
                        Settings
                    </Button>
                )}

                {route === 'authenticated' ? (
                    <Button onClick={logOut} size="small">Sign Out</Button>
                ) : (
                    <Button onClick={() => navigate('/login')} marginInlineStart="auto" size="small">Sign In</Button>
                )}

            </div>

        </nav>
    );
}