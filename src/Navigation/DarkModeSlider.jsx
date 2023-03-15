import React, { useContext } from 'react';
import './NavStyling.css';
import ThemeContext from 'context/ThemeContext';

export default function DarkModeSlider(props) {

    const { theme, toggle } = useContext(ThemeContext);

    return (
        <label className={`toggle-switch .${theme}`} style={props.style}>
            <input type="checkbox" onChange={toggle} />
            <span className="switch" />
        </label>
    );
}