import React, { useState, useContext } from 'react';
import './styles.css';
import ThemeContext from './ThemeContext';

export default function DarkModeSlider(props) {

    const darkMode = useContext(ThemeContext);

    return (
        <label className="toggle-switch" style={props.style}>
            <input type="checkbox" onChange={darkMode.toggle} />
            <span className="switch" />
        </label>
    );
}