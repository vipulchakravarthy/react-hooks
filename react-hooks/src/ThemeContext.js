import React, { useState, useContext } from 'react';

const ThemeContext = React.createContext();

export function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(false);

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
    }

    return (
        <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext)
}