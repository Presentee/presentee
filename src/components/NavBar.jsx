import { React, useContext} from "react";
import { useNavigate } from 'react-router-dom';
import { useAuthenticator} from '@aws-amplify/ui-react';

import Button from "./Button";
import "./styles.css";
import DarkModeSlider from "./DarkModeSlider";
import themeContext from "./ThemeContext";


// Define a Navbar component
const Navbar = () => {

    const { route, signOut } = useAuthenticator((context) => [
        context.route,
        context.signOut,
      ]);
      const navigate = useNavigate();
      const darkMode = useContext(themeContext);
  
      const logOut = () => {
        signOut();
        navigate('/login');
      }
  
      return (
        <nav className={`custom-navbar ${darkMode.mode ? 'dark-theme' : 'light-theme'}`}>
              <Button style={{ fontSize: "18px" }} onClick={() => navigate('/')}>HOME</Button>
              <div>

                  <Button style={{ marginRight: "5px" }} onClick={() => navigate('/protected')}>JOIN</Button>
                  
                  {route === 'authenticated' ? (
                  <Button style={{ marginRight: "5px" }} onClick={() => navigate('/protected2')} >PRESENT</Button>
                  ): ""}
                  
                  {route === 'authenticated' ? (
                  <Button style={{ marginRight: "5px" }} onClick={() => navigate('/create')}>CREATE</Button>
                  ): ""}

                  <Button style={{ marginRight: "5px" }} onClick={() => navigate('/about')}>ABOUT</Button>
              </div>
  
              <container>
                  {/* Switch element */}
                  <DarkModeSlider style={{marginRight: "20px", marginLeft: "-40px"}}/>
                  <Button style={{ width: "40px", height: "40px", borderRadius: "50%" }} onClick={route !== 'authenticated' ? navigate('/login') :() => logOut()} />
              </container>
          </nav>
      );
}

export default Navbar;
