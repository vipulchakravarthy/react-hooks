import React from 'react'

import { useTheme } from './ThemeContext';

export default function FunctionContextComponent() {
    const { darkTheme, toggleTheme } = useTheme();

    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#ccc',
        color: darkTheme ? '#ccc' : '#333',
        padding: '2rem',
        margin: '2rem',
    }
    return (
        <div style={themeStyles}>
            <button onClick={toggleTheme}>Change theme</button>
            Function theme
        </div>
    )
}
