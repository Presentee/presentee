import React, {useContext} from "react";
import "styles.css";
import ThemeContext from 'context';

export default function Button(props) {

  const { theme } = React.useContext(ThemeContext);

  return (
    <button className={`custom-button ${theme}`} onClick={props.onClick} style={props.style}>{props.children}</button>
  );
}