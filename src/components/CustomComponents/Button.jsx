import React, {useContext} from "react";
import "../../styles.css";
import ThemeContext from '../Context/ThemeContext';

export default function Button(props) {

  const darkMode = useContext(ThemeContext);

  return (
    <button className={`custom-button ${darkMode.mode ? 'dark-theme' : 'light-theme'}`} onClick={props.onClick} style={props.style}>{props.children}</button>
  );
}