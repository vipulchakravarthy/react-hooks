import React, { useState, useMemo } from 'react'

export default function UseMemoExample() {

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    }, [number]);
    const themeStyles = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black',
    }
    return (
        <div style={{ marginTop: 200, justifyContent: 'center', display: 'flex' }}>
            <input type="number" value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => setDark(prevDark => !prevDark)}>Change theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </div>
    )
}

const slowFunction = (number) => {
    for (let i = 0; i < 1000000000; i++) { }
    return number * number;
}

