import React, { useState, useContext } from 'react';
import './NavStyling.css';
import ThemeContext from 'components/Context/ThemeContext';

export default function DarkModeSlider(props) {

    const darkMode = useContext(ThemeContext);

    return (
        <label className="toggle-switch" style={props.style}>
            <input type="checkbox" onChange={darkMode.toggle} />
            <span className="switch" />
        </label>
    );
}