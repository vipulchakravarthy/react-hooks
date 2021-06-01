import React, { useState, useCallback } from 'react'

import List from './List';

export default function UseCallBackExample() {

    const [number, setNumber] = useState(1);

    const [dark, setDark] = useState(false);



    const getItems = useCallback(() => {
        return [number, number + 1, number + 2];
    }, [number])

    const themeStyles = {
        backgroundColor: dark ? '#333' : '#ccc',
        color: dark ? '#ccc' : '#333',
        padding: '2rem',
        margin: '2rem',
    }

    return (
        <div style={themeStyles}>
            <input value={number} onChange={(e) => setNumber(parseInt(e.target.value))} type="number" />
            <button onClick={() => setDark(!dark)}>Toggle dark</button>
            <List getItems={getItems} />
        </div>
    )
}
