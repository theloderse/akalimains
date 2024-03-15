import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../logic/theme';

const ThemeToggleButton = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(state=> state.theme.theme);

  console.log('current theme:', currentTheme)
  return (
    <button onClick={() => dispatch(toggleTheme())}>
      Switch to {currentTheme === 'light' ? 'Dark' : 'Light'} Theme
    </button>
  );
};

export default ThemeToggleButton;