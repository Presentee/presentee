import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';


const ThemeButton = () => {
    const { theme, toggle } = useContext(ThemeContext);
  
    return (
      <button onClick={toggle}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    );
  };

  export default ThemeButton;