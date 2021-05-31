import React, { useState, useEffect } from 'react'

export default function ResizeComponent() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth);
        });

        return () => {
            window.removeEventListener('resize', () => {
                setWindowWidth(window.innerWidth);
            })
        }
    }, []);

    return (
        <div>{windowWidth}</div>
    )
}
