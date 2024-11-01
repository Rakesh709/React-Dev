import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContex.js';

function ToggleButton() {
  // Destructure both `theme` and `setTheme` from ThemeContext
  const { theme, setTheme } = useContext(ThemeContext);

  const handleToggle= ()=>{
    const newTheme = theme ==='light' ? 'dark': 'light';
    console.log(`Theme is changing from ${theme} to ${newTheme}`);
    setTheme(newTheme)
    
  }

  return (
    <button onClick={handleToggle}>
      Toggle Theme {theme}
    </button>
  );
}

export default ToggleButton;
