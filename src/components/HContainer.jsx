//Custom container component to wrap the content of the page

import React, {useContext} from "react";
import "./styles.css";
import ThemeContext from './ThemeContext';

export default function HContainer(props) {
    
    const darkMode = useContext(ThemeContext);
    
    return <div className={`hcontainer ${darkMode.mode ? 'dark-theme' : 'light-theme'}`} style={props.style}>{props.children}</div>;
}



















