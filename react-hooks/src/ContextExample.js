import React from 'react'
// import ClassContextComponent from './ClassContextComponent';
import FunctionContextComponent from './FunctionContextComponent';

import { ThemeProvider } from './ThemeContext';

export const ThemeContext = React.createContext();

export default function ContextExample() {
    return (
        <div>
            <>
                <ThemeProvider>
                    {/* <ClassContextComponent /> */}
                    <FunctionContextComponent />
                </ThemeProvider>
            </>
        </div>
    )
}
