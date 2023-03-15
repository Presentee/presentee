//Custom container component to wrap the content of the page

import React, {useContext} from "react";
import './ContainerStyling.css';
import ThemeContext from 'context';

export default function VContainer(props) {

    const darkMode = useContext(ThemeContext);

    return <div className={`vcontainer ${darkMode.mode ? 'dark-theme' : 'light-theme'}`} style={props.style}>{props.children}</div>;
}




















