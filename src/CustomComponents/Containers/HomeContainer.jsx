//Custom container component to wrap the content of the page

import React, {useContext} from "react";
import './ContainerStyling.css';
import ThemeContext from 'context';

export default function HomeContainer(props) {

    const darkMode = useContext(ThemeContext);

    return <div className={`home-container ${darkMode.mode ? 'dark-theme' : 'light-theme'}`} style={props.style}>{props.children}</div>;
}




















