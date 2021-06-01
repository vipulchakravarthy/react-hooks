import React, { useState, useEffect } from 'react';

export default function List({ getItems }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getItems)
        console.log('get items called')
    }, [getItems])

    return (
        items.map(item => <div key={item}>{item}</div>)
    )
}