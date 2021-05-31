import React, { useState, useRef, useEffect } from 'react'

export default function UseRefExample() {
    const [name, setName] = useState("");
    const renderCount = useRef(1);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    })

    return (
        <div style={{ marginTop: 100 }}>
            <div>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>My name is {name}</div>
            <div>The component rendered {renderCount.current} times</div>
        </div>
    )
}
