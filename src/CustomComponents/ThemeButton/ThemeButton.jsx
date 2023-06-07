import React, { useContext } from 'react';
import ThemeContext from 'context/ThemeContext';
import Button from 'CustomComponents/Button';


const ThemeButton = () => {
    const { theme, toggle } = useContext(ThemeContext);
  
    return (
      <Button onClick={toggle}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </Button>
    );
  };

  export default ThemeButton;